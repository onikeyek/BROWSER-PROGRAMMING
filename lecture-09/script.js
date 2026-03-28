// Task 1, 2 & Bonus — fetch message with extra fields, time formatting, loading, error
function getMessage() {
  const output = document.getElementById("output");
  output.innerHTML = '<span class="loading">Loading...</span>';

  fetch("http://localhost:3000/api/message")
    .then(response => response.json())
    .then(data => {
      const formattedTime = new Date(data.time).toLocaleString();
      output.innerHTML = `
        <strong>Message:</strong> ${data.message}<br>
        <strong>Course:</strong> ${data.course}<br>
        <strong>Year:</strong> ${data.year}<br>
        <strong>Time:</strong> ${formattedTime}
      `;
    })
    .catch(error => {
      output.innerHTML = '<span class="error">Error: Could not connect to backend. Is the server running?</span>';
      console.error("Error:", error);
    });
}

// Task 3 — fetch student endpoint
function getStudent() {
  const output = document.getElementById("student-output");
  output.innerHTML = '<span class="loading">Loading...</span>';

  fetch("http://localhost:3000/api/student")
    .then(response => response.json())
    .then(data => {
      output.innerHTML = `
        <strong>Name:</strong> ${data.name}<br>
        <strong>Role:</strong> ${data.role}
      `;
    })
    .catch(error => {
      output.innerHTML = '<span class="error">Error: Could not connect to backend. Is the server running?</span>';
      console.error("Error:", error);
    });
}
