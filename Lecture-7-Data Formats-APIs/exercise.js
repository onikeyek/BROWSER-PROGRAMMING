const output = document.getElementById("output")
const list = document.getElementById("userList")

function log(text) {
  output.textContent += text + "\n"
}

function clearOutput() {
  output.textContent = ""
  list.innerHTML = ""
}

document.getElementById("btnLoadUsers").onclick = loadUsers

async function loadUsers() {
  clearOutput()

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    // Part C: check HTTP status before parsing
    if (!response.ok) {
      throw new Error("HTTP error: " + response.status)
    }

    const users = await response.json()

    // Part B: loop through users and print name, email, city
    users.forEach(function (user) {
      const name = user.name
      const email = user.email
      const city = user.address.city // nested field

      // console-style output
      log(name + " - " + email + " - " + city)

      // Part E: render as list items in the webpage
      const li = document.createElement("li")
      li.textContent = name + " - " + email + " - " + city
      list.appendChild(li)
    })

  } catch (error) {
    // Part C: catch network errors or thrown HTTP errors
    log("Error: " + error.message)
  }
}
