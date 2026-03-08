const legacyPathMap = Object.freeze({
  "/html-notes.html": "/notes/html",
  "/javascript-notes.html": "/notes/javascript",
  "/java-notes.html": "/notes/java",
  "/mysql-notes.html": "/notes/mysql",
  "/react-notes.html": "/notes/react",
  "/notes.html": "/notes/javascript"
});

function normalizeInlineStyle(styleText) {
  return styleText;
}

export function parseNoteDocument(rawSource) {
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(rawSource, "text/html");

  parsedDocument.querySelectorAll("a.skip-link, nav.global-nav").forEach((element) => {
    element.remove();
  });

  parsedDocument.querySelectorAll("a[href]").forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href) {
      return;
    }

    anchor.setAttribute("href", legacyPathMap[href] ?? href);
  });

  const stylesheetHrefs = Array.from(
    parsedDocument.querySelectorAll('link[rel="stylesheet"][href]'),
    (linkElement) => linkElement.getAttribute("href")
  ).filter(Boolean);

  const inlineStyles = Array.from(parsedDocument.querySelectorAll("style"), (styleElement) =>
    normalizeInlineStyle(styleElement.textContent ?? "")
  ).filter((styleText) => styleText.trim().length > 0);

  const externalScriptSources = Array.from(
    parsedDocument.querySelectorAll("script[src]"),
    (scriptElement) => scriptElement.getAttribute("src")
  ).filter(Boolean);

  const inlineScripts = Array.from(
    parsedDocument.querySelectorAll("script:not([src])"),
    (scriptElement) => scriptElement.textContent ?? ""
  ).filter((scriptText) => scriptText.trim().length > 0);

  parsedDocument.querySelectorAll("script").forEach((scriptElement) => {
    scriptElement.remove();
  });

  return {
    bodyHtml: parsedDocument.body.innerHTML,
    externalScriptSources,
    inlineScripts,
    inlineStyles,
    stylesheetHrefs
  };
}
