const domOutput = document.getElementById("domOutput");
const dynamicArea = document.getElementById("dynamicArea");

function setLines(lines) {
  domOutput.textContent = lines.join("\n");
}

document.getElementById("runSelectors").addEventListener("click", () => {
  const byId = document.getElementById("demo");
  const byClass = document.getElementsByClassName("test");
  const byTag = document.getElementsByTagName("div");
  const byName = document.getElementsByName("inp");
  const byQuery = document.querySelector("#demo");
  const byQueryAll = document.querySelectorAll(".test");

  [...byClass].forEach((element) => {
    element.style.backgroundColor = "#e0f2fe";
    element.style.marginTop = "6px";
    element.style.padding = "5px";
  });

  setLines([
    "DOM Selector Output:",
    "getElementById('demo') -> " + byId.textContent,
    "getElementsByClassName('test').length -> " + byClass.length,
    "getElementsByTagName('div').length -> " + byTag.length,
    "getElementsByName('inp').length -> " + byName.length,
    "querySelector('#demo').textContent -> " + byQuery.textContent,
    "querySelectorAll('.test').length -> " + byQueryAll.length
  ]);
});

document.getElementById("runCreate").addEventListener("click", () => {
  dynamicArea.innerHTML = "";

  const anchorTag = document.createElement("a");
  anchorTag.innerText = "Google";
  anchorTag.setAttribute("href", "https://google.com");
  anchorTag.setAttribute("target", "_blank");
  anchorTag.style.display = "inline-block";
  anchorTag.style.marginBottom = "10px";

  const image = document.createElement("img");
  image.src = "https://picsum.photos/220/120";
  image.alt = "Random sample";
  image.style.display = "block";
  image.style.borderRadius = "8px";
  image.style.marginBottom = "10px";

  const div = document.createElement("div");
  div.setAttribute("id", "demoCreated");
  const h1 = document.createElement("h3");
  h1.innerText = "Header";
  const p = document.createElement("p");
  p.innerText = "Paragraph";
  div.appendChild(h1);
  div.appendChild(p);

  dynamicArea.appendChild(anchorTag);
  dynamicArea.appendChild(image);
  dynamicArea.appendChild(div);

  setLines([
    "Dynamic creation done:",
    "createElement('a'|'img'|'div') used",
    "setAttribute(), appendChild() used",
    "Elements rendered in Dynamic area"
  ]);
});

document.getElementById("removeClass").addEventListener("click", () => {
  const testElement = document.getElementById("test");
  testElement.removeAttribute("class");

  setLines([
    "removeAttribute('class') executed on #test",
    "Current class attribute -> " + String(testElement.getAttribute("class"))
  ]);
});