const form = document.getElementById("taskForm");
const inpVal = document.getElementById("inputTask");
const container = document.getElementById("tasks");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskValue = inpVal.value.trim();
  if (!taskValue) {
    alert("Please fill the field");
    return;
  }

  const taskEle = document.createElement("div");
  taskEle.setAttribute("class", "task");

  const contentEl = document.createElement("div");
  contentEl.setAttribute("class", "content");

  const inpEle = document.createElement("input");
  inpEle.setAttribute("type", "text");
  inpEle.setAttribute("class", "text");
  inpEle.setAttribute("readonly", "readonly");
  inpEle.setAttribute("value", taskValue);

  const actionEl = document.createElement("div");
  actionEl.setAttribute("class", "actions");

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.setAttribute("class", "edit");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.setAttribute("class", "delete");

  actionEl.appendChild(editBtn);
  actionEl.appendChild(deleteBtn);
  contentEl.appendChild(inpEle);
  taskEle.appendChild(contentEl);
  taskEle.appendChild(actionEl);
  container.append(taskEle);

  form.reset();

  editBtn.addEventListener("click", () => {
    if (editBtn.innerText.toLowerCase() === "edit") {
      inpEle.removeAttribute("readonly");
      editBtn.innerText = "Save";
      inpEle.focus();
      return;
    }

    inpEle.setAttribute("readonly", "readonly");
    editBtn.innerText = "Edit";
  });

  deleteBtn.addEventListener("click", () => {
    container.removeChild(taskEle);
  });
});