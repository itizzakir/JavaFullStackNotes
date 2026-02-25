const flowOutput = document.getElementById("flowOutput");

function appendLine(text) {
  flowOutput.textContent += (flowOutput.textContent ? "\n" : "") + text;
}

function resetOutput(title) {
  flowOutput.textContent = title;
}

function callbackTask(name, delay, callback) {
  setTimeout(() => {
    appendLine(name + " is completed");
    callback();
  }, delay);
}

function promiseTask(name, delay, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        appendLine(name + " is rejected");
        reject(new Error(name + " failed"));
        return;
      }

      appendLine(name + " is completed");
      resolve(name + " done");
    }, delay);
  });
}

document.getElementById("runCallback").addEventListener("click", () => {
  resetOutput("Callback Hell Flow:");

  callbackTask("task1", 700, () => {
    callbackTask("task2", 700, () => {
      callbackTask("task3", 700, () => {
        callbackTask("task4", 700, () => {
          appendLine("all tasks completed with nested callbacks");
        });
      });
    });
  });
});

document.getElementById("runPromise").addEventListener("click", () => {
  resetOutput("Promise Chain Flow:");

  promiseTask("task1", 700, false)
    .then(() => promiseTask("task2", 700, false))
    .then(() => promiseTask("task3", 700, false))
    .then(() => promiseTask("task4", 700, true))
    .then(() => appendLine("all tasks completed"))
    .catch((err) => appendLine("catch -> " + err.message))
    .finally(() => appendLine("finally -> always runs"));
});

document.getElementById("runAsyncAwait").addEventListener("click", async () => {
  resetOutput("Async/Await Flow:");

  try {
    await promiseTask("task1", 700, false);
    await promiseTask("task2", 700, false);
    await promiseTask("task3", 700, false);
    await promiseTask("task4", 700, true);
    appendLine("all tasks completed");
  } catch (err) {
    appendLine("try/catch -> " + err.message);
  } finally {
    appendLine("finally block finished");
  }
});