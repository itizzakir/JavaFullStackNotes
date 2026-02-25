const asyncOutput = document.getElementById("asyncOutput");
const store = document.getElementById("store");
let intervalId = null;

function setOutput(lines) {
  asyncOutput.textContent = lines.join("\n");
}

function appendOutput(line) {
  asyncOutput.textContent += "\n" + line;
}

document.getElementById("runTimers").addEventListener("click", () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }

  setOutput([
    "setTimeout + setInterval Demo:",
    "10",
    "20",
    "40",
    "50",
    "(30 from timeout comes later)"
  ]);

  setTimeout(() => {
    appendOutput("setTimeout -> 30");
  }, 900);

  let tick = 0;
  intervalId = setInterval(() => {
    tick += 1;
    appendOutput("setInterval tick -> " + tick);
    if (tick === 3) {
      clearInterval(intervalId);
      intervalId = null;
      appendOutput("setInterval stopped after 3 ticks");
    }
  }, 500);
});

document.getElementById("runPromiseDemo").addEventListener("click", () => {
  setOutput(["Promise lifecycle demo:", "state -> pending"]);

  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve("promise resolved");
    }, 1000);
  });

  p.then((data) => {
    appendOutput("state -> fulfilled");
    appendOutput("then -> " + data);
    return "next value";
  })
    .then((next) => {
      appendOutput("then2 -> " + next);
      throw new Error("manual rejection after then2");
    })
    .catch((err) => {
      appendOutput("catch -> " + err.message);
    })
    .finally(() => {
      appendOutput("finally -> always runs");
    });
});

document.getElementById("fetchGithub").addEventListener("click", async () => {
  setOutput(["Fetching https://api.github.com/users ..."]);
  store.innerHTML = "";

  try {
    const result = await window.fetch("https://api.github.com/users");
    if (!result.ok) {
      throw new Error("HTTP " + result.status);
    }

    const response = await result.json();
    response.slice(0, 6).forEach((user) => {
      const userCard = document.createElement("div");
      userCard.className = "card";
      userCard.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.login}" style="width:64px;height:64px;border-radius:50%;" />
        <p><strong>${user.login}</strong></p>
      `;
      store.appendChild(userCard);
    });

    setOutput([
      "Fetch success (GitHub users)",
      "total received -> " + response.length,
      "showing first 6 users"
    ]);
  } catch (err) {
    setOutput(["Fetch error:", err.message]);
  }
});

document.getElementById("fetchJsonPlaceholder").addEventListener("click", async () => {
  setOutput(["Fetching JSONPlaceholder users + posts in parallel..."]);

  try {
    const [userRes, postRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/1")
    ]);

    if (!userRes.ok || !postRes.ok) {
      throw new Error("One or more HTTP calls failed");
    }

    const user = await userRes.json();
    const post = await postRes.json();

    setOutput([
      "Parallel fetch success:",
      "user.name -> " + user.name,
      "user.email -> " + user.email,
      "post.title -> " + post.title
    ]);
  } catch (err) {
    setOutput(["Parallel fetch error:", err.message]);
  }
});