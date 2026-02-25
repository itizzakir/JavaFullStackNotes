const btn = document.getElementById("btn");
const demo = document.getElementById("demo");
const inp = document.getElementById("inp");
const citySelect = document.getElementById("citySelect");
const psw = document.getElementById("psw");
const check = document.getElementById("check");
const show = document.getElementById("show");
const output = document.getElementById("eventsOutput");
const colorPills = document.getElementsByClassName("test");

let clickCount = 0;
let dblClickCount = 0;

function print(message) {
  output.textContent = message;
}

btn.onclick = function () {
  clickCount += 1;
  print("onclick fired. click count = " + clickCount);
};

btn.addEventListener("dblclick", () => {
  dblClickCount += 1;
  print("dblclick fired. double click count = " + dblClickCount);
});

demo.addEventListener("mouseenter", () => {
  demo.style.background = "#dcfce7";
  print("mouseenter -> mouse entered hover box");
});

demo.addEventListener("mouseleave", () => {
  demo.style.background = "#fbfdff";
  print("mouseleave -> mouse left hover box");
});

inp.addEventListener("keydown", (event) => {
  print("keydown -> key pressed: " + event.key);
});

inp.addEventListener("keyup", (event) => {
  print("keyup -> key released: " + event.key);
});

citySelect.addEventListener("change", (event) => {
  print("change event -> selected value: " + event.target.value);
});

check.addEventListener("click", (event) => {
  if (event.target.checked) {
    psw.setAttribute("type", "text");
    show.innerText = "Hide password";
    print("Password is now visible");
  } else {
    psw.setAttribute("type", "password");
    show.innerText = "Show password";
    print("Password is now hidden");
  }
});

[...colorPills].forEach((pill) => {
  pill.addEventListener("mouseover", () => {
    pill.style.backgroundColor = pill.innerText;
    pill.style.color = "#fff";
    print("mouseover on color pill -> " + pill.innerText);
  });

  pill.addEventListener("mouseleave", () => {
    pill.style.backgroundColor = "#fff";
    pill.style.color = "#1c2434";
    print("mouseleave from color pill -> " + pill.innerText);
  });
});