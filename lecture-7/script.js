const cityText = document.getElementById("city")
const temperatureText = document.getElementById("temperature")
const windText = document.getElementById("wind")
const timeText = document.getElementById("time")
const output = document.getElementById("output")

function log(message) {
    output.textContent += message + "\n"
}

function clearOutput() {
    output.textContent = ""
}

// Attach click handlers to sidebar city items
document.querySelectorAll(".city-item").forEach(item => {
    item.addEventListener("click", () => {
        // Update active state
        document.querySelectorAll(".city-item").forEach(i => {
            i.classList.remove("active")
            i.querySelector(".arrow")?.remove()
        })
        item.classList.add("active")
        const arrow = document.createElement("span")
        arrow.className = "arrow"
        arrow.textContent = "›"
        item.appendChild(arrow)

        const city = item.dataset.city
        const lat = item.dataset.lat
        const lon = item.dataset.lon
        loadWeatherByCity(city, lat, lon)
    })
})

async function loadWeatherByCity(cityName, latitude, longitude) {
    clearOutput()

    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status)
        }

        const data = await response.json()

        const temperature = data.current.temperature_2m
        const wind = data.current.wind_speed_10m
        const time = data.current.time

        cityText.textContent = cityName
        temperatureText.textContent = temperature + " °C"
        windText.textContent = wind + " km/h"
        timeText.textContent = time

        if (temperature < 0) {
            document.body.className = "cold"
        } else {
            document.body.className = "mild"
        }

        log("City: " + cityName)
        log("Temperature: " + temperature + " °C")
        log("Wind Speed: " + wind + " km/h")
        log("Time: " + time)

    } catch (error) {
        log("Error: " + error.message)
    }
}

// Load default city on page open
document.querySelector(".city-item.active").click()
