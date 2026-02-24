import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const externalScriptPromises = new Map();

function escapeCssIdentifier(value) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(value);
  }

  return value.replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}

function createScopedDocument(contentRoot) {
  const sourceDocument = window.document;

  return {
    addEventListener: (...args) => sourceDocument.addEventListener(...args),
    createDocumentFragment: (...args) => sourceDocument.createDocumentFragment(...args),
    createElement: (...args) => sourceDocument.createElement(...args),
    createTextNode: (...args) => sourceDocument.createTextNode(...args),
    dispatchEvent: (...args) => sourceDocument.dispatchEvent(...args),
    getElementById: (id) => contentRoot.querySelector(`#${escapeCssIdentifier(id)}`),
    getElementsByClassName: (className) => contentRoot.getElementsByClassName(className),
    getElementsByTagName: (tagName) => contentRoot.getElementsByTagName(tagName),
    querySelector: (selector) => contentRoot.querySelector(selector),
    querySelectorAll: (selector) => contentRoot.querySelectorAll(selector),
    removeEventListener: (...args) => sourceDocument.removeEventListener(...args),
    get body() {
      return contentRoot;
    },
    get documentElement() {
      return contentRoot;
    },
    get location() {
      return sourceDocument.location;
    },
    get readyState() {
      return sourceDocument.readyState;
    }
  };
}

function createTimerRegistry() {
  const timeoutIds = new Set();
  const intervalIds = new Set();
  const frameIds = new Set();

  return {
    cancelAnimationFrame(id) {
      frameIds.delete(id);
      window.cancelAnimationFrame(id);
    },
    clearAll() {
      timeoutIds.forEach((id) => {
        window.clearTimeout(id);
      });
      intervalIds.forEach((id) => {
        window.clearInterval(id);
      });
      frameIds.forEach((id) => {
        window.cancelAnimationFrame(id);
      });
      timeoutIds.clear();
      intervalIds.clear();
      frameIds.clear();
    },
    clearInterval(id) {
      intervalIds.delete(id);
      window.clearInterval(id);
    },
    clearTimeout(id) {
      timeoutIds.delete(id);
      window.clearTimeout(id);
    },
    requestAnimationFrame(callback) {
      const id = window.requestAnimationFrame(callback);
      frameIds.add(id);
      return id;
    },
    setInterval(callback, delay, ...args) {
      const id = window.setInterval(callback, delay, ...args);
      intervalIds.add(id);
      return id;
    },
    setTimeout(callback, delay, ...args) {
      const id = window.setTimeout(callback, delay, ...args);
      timeoutIds.add(id);
      return id;
    }
  };
}

function runInlineScript(scriptText, scopedDocument, timerRegistry) {
  const scopedWindow = Object.create(window);

  Object.defineProperty(scopedWindow, "document", {
    configurable: true,
    value: scopedDocument
  });

  const executeScript = new Function(
    "window",
    "document",
    "globalThis",
    "self",
    "setTimeout",
    "clearTimeout",
    "setInterval",
    "clearInterval",
    "requestAnimationFrame",
    "cancelAnimationFrame",
    scriptText
  );

  executeScript.call(
    scopedWindow,
    scopedWindow,
    scopedDocument,
    scopedWindow,
    scopedWindow,
    timerRegistry.setTimeout,
    timerRegistry.clearTimeout,
    timerRegistry.setInterval,
    timerRegistry.clearInterval,
    timerRegistry.requestAnimationFrame,
    timerRegistry.cancelAnimationFrame
  );
}

function ensureExternalScriptLoaded(src) {
  if (!src) {
    return Promise.resolve();
  }

  const cachedPromise = externalScriptPromises.get(src);
  if (cachedPromise) {
    return cachedPromise;
  }

  const existingScript = Array.from(document.querySelectorAll("script[data-note-script-src]")).find(
    (scriptElement) => scriptElement.dataset.noteScriptSrc === src
  );

  if (existingScript) {
    const readyPromise =
      existingScript.dataset.noteScriptReady === "true"
        ? Promise.resolve()
        : new Promise((resolve, reject) => {
            existingScript.addEventListener("load", resolve, { once: true });
            existingScript.addEventListener(
              "error",
              () => reject(new Error(`Could not load note script: ${src}`)),
              { once: true }
            );
          });

    externalScriptPromises.set(src, readyPromise);
    return readyPromise;
  }

  const scriptPromise = new Promise((resolve, reject) => {
    const scriptElement = document.createElement("script");
    scriptElement.async = false;
    scriptElement.dataset.noteScriptSrc = src;
    scriptElement.src = src;

    scriptElement.addEventListener(
      "load",
      () => {
        scriptElement.dataset.noteScriptReady = "true";
        resolve();
      },
      { once: true }
    );

    scriptElement.addEventListener(
      "error",
      () => {
        externalScriptPromises.delete(src);
        reject(new Error(`Could not load note script: ${src}`));
      },
      { once: true }
    );

    document.head.append(scriptElement);
  });

  externalScriptPromises.set(src, scriptPromise);
  return scriptPromise;
}

function handleInternalNavigation(event, navigate) {
  if (!(event.target instanceof Element)) {
    return;
  }

  const anchorElement = event.target.closest("a[href]");
  if (!anchorElement) {
    return;
  }

  const href = anchorElement.getAttribute("href");
  if (!href || href.startsWith("#")) {
    return;
  }

  if (anchorElement.target && anchorElement.target !== "_self") {
    return;
  }

  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) {
    return;
  }

  if (!href.startsWith("/")) {
    return;
  }

  event.preventDefault();
  navigate(href);
}

export default function NoteDocument({ noteDocument }) {
  const hostRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const hostElement = hostRef.current;
    if (!hostElement || !noteDocument) {
      return undefined;
    }

    const timerRegistry = createTimerRegistry();
    let isDisposed = false;

    hostElement.replaceChildren();

    noteDocument.stylesheetHrefs.forEach((href) => {
      const stylesheetLink = document.createElement("link");
      stylesheetLink.href = href;
      stylesheetLink.rel = "stylesheet";
      hostElement.append(stylesheetLink);
    });

    noteDocument.inlineStyles.forEach((styleText) => {
      const styleElement = document.createElement("style");
      styleElement.textContent = styleText;
      hostElement.append(styleElement);
    });

    const contentRoot = document.createElement("div");
    contentRoot.className = "note-document-content";
    contentRoot.innerHTML = noteDocument.bodyHtml;
    hostElement.append(contentRoot);

    const onContentClick = (event) => {
      handleInternalNavigation(event, navigate);
    };

    contentRoot.addEventListener("click", onContentClick);

    const scopedDocument = createScopedDocument(contentRoot);

    const runNoteScripts = async () => {
      try {
        for (const scriptSrc of noteDocument.externalScriptSources) {
          if (isDisposed) {
            return;
          }

          await ensureExternalScriptLoaded(scriptSrc);
        }

        for (const scriptText of noteDocument.inlineScripts) {
          if (isDisposed) {
            return;
          }

          runInlineScript(scriptText, scopedDocument, timerRegistry);
        }
      } catch (error) {
        console.error("Failed to execute note script.", error);
      }
    };

    runNoteScripts();

    return () => {
      isDisposed = true;
      contentRoot.removeEventListener("click", onContentClick);
      timerRegistry.clearAll();
      hostElement.replaceChildren();
    };
  }, [navigate, noteDocument]);

  return <div className="note-document-surface" ref={hostRef} />;
}
