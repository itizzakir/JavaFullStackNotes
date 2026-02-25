(function () {
  function getRawFromValue() {
    const params = new URLSearchParams(window.location.search);
    return params.get("from");
  }

  function getSafeTopicUrl(rawFromValue) {
    if (!rawFromValue) {
      return "/notes/javascript";
    }

    try {
      const url = new URL(rawFromValue, window.location.origin);
      const isSameOrigin = url.origin === window.location.origin;
      const isJavaScriptNotes = url.pathname.startsWith("/notes/javascript");

      if (!isSameOrigin || !isJavaScriptNotes) {
        return "/notes/javascript";
      }

      return url.pathname + url.search + url.hash;
    } catch {
      return "/notes/javascript";
    }
  }

  function applyFromParam(hrefValue, rawFromValue) {
    if (!hrefValue || !rawFromValue) {
      return hrefValue;
    }

    try {
      const url = new URL(hrefValue, window.location.origin);
      url.searchParams.set("from", rawFromValue);
      return url.pathname + url.search + url.hash;
    } catch {
      return hrefValue;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const rawFromValue = getRawFromValue();
    const topicUrl = getSafeTopicUrl(rawFromValue);

    document.querySelectorAll("[data-back-topic]").forEach(function (link) {
      link.setAttribute("href", topicUrl);
    });

    document.querySelectorAll("[data-keep-from]").forEach(function (link) {
      const hrefValue = link.getAttribute("href");
      link.setAttribute("href", applyFromParam(hrefValue, rawFromValue));
    });
  });
})();
