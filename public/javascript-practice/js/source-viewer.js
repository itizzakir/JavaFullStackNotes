(function () {
  async function loadSourceInto(targetId, sourcePath) {
    const target = document.getElementById(targetId);
    if (!target || !sourcePath) {
      return;
    }

    try {
      const response = await fetch(sourcePath, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(response.status + " " + response.statusText);
      }
      target.textContent = await response.text();
    } catch (error) {
      target.textContent = "Unable to load source from " + sourcePath + ". " + error.message;
    }
  }

  function loadPanel(panel) {
    const htmlSource = panel.getAttribute("data-source-html");
    const jsSource = panel.getAttribute("data-source-js");
    const htmlTarget = panel.getAttribute("data-target-html");
    const jsTarget = panel.getAttribute("data-target-js");

    loadSourceInto(htmlTarget, htmlSource);
    loadSourceInto(jsTarget, jsSource);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const panels = document.querySelectorAll("[data-source-html][data-source-js]");
    panels.forEach(loadPanel);
  });
})();
