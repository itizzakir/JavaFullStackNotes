const storageOutput = document.getElementById("storageOutput");
const userForm = document.getElementById("userForm");

const localUsers = {
  user1: "Lokesh",
  user2: "Pushpak",
  user3: "Sandeep",
  user4: "Akash",
  user5: "Navya",
  user6: "Hussain"
};

const sessionUsers = {
  user1: "Lokesh",
  user2: "Pushpak",
  user3: "Sandeep",
  user4: "Akash",
  user5: "Navya",
  user6: "Hussain"
};

function print(lines) {
  storageOutput.textContent = lines.join("\n");
}

function setMany(store, users) {
  Object.entries(users).forEach(([key, value]) => {
    store.setItem(key, value);
  });
}

document.getElementById("setLocal").addEventListener("click", () => {
  setMany(localStorage, localUsers);
  print([
    "localStorage setItem completed for user1..user6",
    "Try get localStorage to read user3"
  ]);
});

document.getElementById("getLocal").addEventListener("click", () => {
  const value = localStorage.getItem("user3");
  print(["localStorage.getItem('user3') -> " + value]);
});

document.getElementById("removeLocal").addEventListener("click", () => {
  localStorage.removeItem("user6");
  print([
    "localStorage.removeItem('user6') done",
    "localStorage.getItem('user6') -> " + String(localStorage.getItem("user6"))
  ]);
});

document.getElementById("clearLocal").addEventListener("click", () => {
  localStorage.clear();
  print(["localStorage.clear() completed"]);
});

document.getElementById("setSession").addEventListener("click", () => {
  setMany(sessionStorage, sessionUsers);
  print([
    "sessionStorage setItem completed for user1..user6",
    "Try get sessionStorage to read user5"
  ]);
});

document.getElementById("getSession").addEventListener("click", () => {
  const value = sessionStorage.getItem("user5");
  print(["sessionStorage.getItem('user5') -> " + value]);
});

document.getElementById("removeSession").addEventListener("click", () => {
  sessionStorage.removeItem("user4");
  print([
    "sessionStorage.removeItem('user4') done",
    "sessionStorage.getItem('user4') -> " + String(sessionStorage.getItem("user4"))
  ]);
});

document.getElementById("clearSession").addEventListener("click", () => {
  sessionStorage.clear();
  print(["sessionStorage.clear() completed"]);
});

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const usernameInput = document.getElementById("uname");
  const emailInput = document.getElementById("umail");

  const userData = {
    username: usernameInput.value.trim(),
    email: emailInput.value.trim()
  };

  localStorage.setItem("userDetails", JSON.stringify(userData));
  sessionStorage.setItem("userDetails", JSON.stringify(userData));

  print([
    "Form saved successfully.",
    "localStorage.userDetails -> " + localStorage.getItem("userDetails"),
    "sessionStorage.userDetails -> " + sessionStorage.getItem("userDetails")
  ]);

  userForm.reset();
});