console.log("JS connected ✅");

/* =========================================================
   LECTURE 6 — Asynchronous JavaScript
   Topics: setTimeout, Promise, async/await, fetch
   ========================================================= */

// Get references to UI elements
const output     = document.getElementById("output");
const statusText = document.getElementById("status");

// Helper: print a line to output
function log(message) {
  if (output.textContent === "...") output.textContent = "";
  output.textContent += message + "\n";
}

// Helper: clear output
function clearOutput() {
  output.textContent = "";
}

// Helper: update status line
function setStatus(text) {
  statusText.textContent = "Status: " + text;
}


/* ==========================================================
   1) ASYNC TIMEOUT
   ========================================================== */

document.getElementById("btnTimeout").onclick = function () {
  clearOutput();

  log("Start");

  // setTimeout schedules code to run LATER — it does NOT block.
  setTimeout(function () {
    log("Timeout finished after 500 ms");
  }, 500);

  log("End");
};


/* ==========================================================
   2) ASYNC PROMISE
   ========================================================== */

// Returns a Promise that resolves after 1 second.
function waitOneSecond() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Promise resolved after 1 second!");
    }, 1000);
  });
}

document.getElementById("btnPromise").onclick = function () {
  clearOutput();
  setStatus("Waiting (Promise)...");

  // .then() runs AFTER the Promise resolves.
  waitOneSecond().then(function (result) {
    log(result);
    setStatus("Idle");
  });
};


/* ==========================================================
   3) ASYNC / AWAIT
   ========================================================== */

async function runAwaitExample() {
  clearOutput();
  setStatus("Please wait, async/await running...");

  log("Before await");

  // 'await' pauses this function until the Promise resolves.
  // The browser stays responsive — it does NOT freeze.
  const result = await waitOneSecond();

  log("After await");
  log(result);
  setStatus("Idle");
}

document.getElementById("btnAwait").onclick = runAwaitExample;


/* ==========================================================
   4) ASYNC FETCH (REAL WORLD)
   ========================================================== */

async function runFetchExample() {
  clearOutput();
  setStatus("Loading from API...");

  try {
    // Send HTTP GET request
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    // We check response.ok because fetch() does NOT throw on
    // HTTP errors (404, 500…) — only on network failures.
    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }

    // Parse JSON body (also async)
    const data = await response.json();

    log("ID: "        + data.id);
    log("Title: "     + data.title);
    log("Completed: " + data.completed);

  } catch (error) {
    // Runs on network failure OR if we threw manually above
    log("Error: " + error.message);

  } finally {
    // Always runs — success or failure
    setStatus("Idle");
  }
}

document.getElementById("btnFetch").onclick = runFetchExample;