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

function removeQueryParamFromCurrentUrl(paramName) {
  const currentUrl = new URL(window.location.href);
  if (!currentUrl.searchParams.has(paramName)) {
    return;
  }

  currentUrl.searchParams.delete(paramName);
  const nextUrl = `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`;
  window.history.replaceState(window.history.state, "", nextUrl);
}

function getNoteScrollStorageKey(pathname) {
  return `note-scroll:${pathname}`;
}

function isReturnFromPracticeReferrer() {
  try {
    const referrerUrl = new URL(document.referrer);
    return (
      referrerUrl.origin === window.location.origin &&
      referrerUrl.pathname.startsWith("/javascript-practice/")
    );
  } catch {
    return false;
  }
}

function restoreNoteScrollPosition(contentRoot) {
  const currentUrl = new URL(window.location.href);
  const hasYQueryParam = currentUrl.searchParams.has("y");
  const yParam = currentUrl.searchParams.get("y");
  const queryYValue = Number.parseInt(yParam ?? "", 10);
  const storedYParam = window.sessionStorage.getItem(getNoteScrollStorageKey(currentUrl.pathname));
  const storedYValue = Number.parseInt(storedYParam ?? "", 10);

  const yValue =
    Number.isFinite(queryYValue) && queryYValue >= 0
      ? queryYValue
      : !hasYQueryParam && isReturnFromPracticeReferrer() && Number.isFinite(storedYValue) && storedYValue >= 0
        ? storedYValue
        : Number.NaN;

  const hasYValue = Number.isFinite(yValue) && yValue >= 0;
  let hashId = "";

  if (currentUrl.hash) {
    try {
      hashId = decodeURIComponent(currentUrl.hash.slice(1));
    } catch {
      hashId = currentUrl.hash.slice(1);
    }
  }

  if (!hasYValue && !hashId) {
    return () => {};
  }

  const startedAt = Date.now();
  const maxDurationMs = 6000;
  let frameId = null;
  let intervalId = null;
  let disposed = false;

  const stop = () => {
    disposed = true;

    if (frameId !== null) {
      window.cancelAnimationFrame(frameId);
      frameId = null;
    }

    if (intervalId !== null) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
  };

  const scrollToHash = () => {
    if (!hashId) {
      return false;
    }

    const escapedHashId = escapeCssIdentifier(hashId);
    const targetElement =
      contentRoot.querySelector(`#${escapedHashId}`) || document.getElementById(hashId);

    if (!targetElement) {
      return false;
    }

    targetElement.scrollIntoView({ block: "start" });
    return true;
  };

  const finish = (tryHashFallback) => {
    if (disposed) {
      return;
    }

    if (tryHashFallback) {
      scrollToHash();
    }

    if (hasYQueryParam) {
      removeQueryParamFromCurrentUrl("y");
    }

    stop();
  };

  const restoreTick = () => {
    if (disposed) {
      return;
    }

    const timedOut = Date.now() - startedAt > maxDurationMs;

    if (hasYValue) {
      window.scrollTo(0, yValue);

      const reachedY = Math.abs(window.scrollY - yValue) <= 2;
      if (reachedY) {
        finish(false);
        return;
      }

      if (timedOut) {
        finish(true);
        return;
      }
    } else {
      const foundHash = scrollToHash();
      if (foundHash || timedOut) {
        stop();
        return;
      }
    }

    frameId = window.requestAnimationFrame(restoreTick);
  };

  // Interval is a second channel for late layout shifts outside rAF timing.
  if (hasYValue) {
    intervalId = window.setInterval(() => {
      if (disposed) {
        return;
      }

      window.scrollTo(0, yValue);
      if (Math.abs(window.scrollY - yValue) <= 2) {
        finish(false);
      }
    }, 120);
  }

  frameId = window.requestAnimationFrame(restoreTick);
  return stop;
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

    const scrollStorageKey = getNoteScrollStorageKey(window.location.pathname);
    let persistFrameId = null;
    const persistScrollPosition = () => {
      window.sessionStorage.setItem(scrollStorageKey, String(Math.max(0, Math.round(window.scrollY))));
    };
    const schedulePersistScrollPosition = () => {
      if (persistFrameId !== null) {
        return;
      }

      persistFrameId = window.requestAnimationFrame(() => {
        persistFrameId = null;
        persistScrollPosition();
      });
    };

    persistScrollPosition();
    window.addEventListener("scroll", schedulePersistScrollPosition, { passive: true });

    const stopScrollRestore = restoreNoteScrollPosition(contentRoot);

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
      if (persistFrameId !== null) {
        window.cancelAnimationFrame(persistFrameId);
      }
      persistScrollPosition();
      window.removeEventListener("scroll", schedulePersistScrollPosition);
      stopScrollRestore();
      contentRoot.removeEventListener("click", onContentClick);
      timerRegistry.clearAll();
      hostElement.replaceChildren();
    };
  }, [navigate, noteDocument]);

  return <div className="note-document-surface" ref={hostRef} />;
}
