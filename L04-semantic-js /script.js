// ===== Console + variables =====
console.log("✅ Page loaded: script.js is running");

const themeBtn = document.getElementById("themeBtn");
const countBtn = document.getElementById("countBtn");
const countLabel = document.getElementById("countLabel");

// ===== State =====
let isDarkMode = false;   // state variable #1
let clickCount = 0;       // state variable #2 (also counts as meaningful variable)

// ===== Functions =====
function setTheme() {
  document.body.classList.toggle("dark");
  isDarkMode = document.body.classList.contains("dark");
  console.log("🌙 Theme changed. Dark mode is now:", isDarkMode);
}

function increaseCount() {
  clickCount = clickCount + 1;
  console.log("🖱️ Button clicked. clickCount =", clickCount);
  if (countLabel) {
    countLabel.textContent = clickCount;
  }
}

// ===== Events =====
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    console.log("🎛️ Theme button clicked");
    setTheme();
  });
} else {
  console.log("⚠️ themeBtn not found in HTML");
}

if (countBtn) {
  countBtn.addEventListener("click", () => {
    console.log("➕ Count button clicked");
    increaseCount();
  });
} else {
  console.log("⚠️ countBtn not found in HTML");
}
