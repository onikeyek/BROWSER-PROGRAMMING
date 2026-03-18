# Weather Dashboard 

## Why is this page called dynamic?

This page is called dynamic because its content changes without reloading the HTML file. When a user clicks a city, JavaScript fetches live data and updates the DOM in real time. The page responds to user actions and external data, rather than displaying fixed, hardcoded content.

## What does the API give us?

The API gives us current weather data for any location we request, identified by latitude and longitude. It returns real-time values like temperature and wind speed that we could never hardcode ourselves. Without the API, we would have no way to get up-to-date weather information from inside a browser.

## Why is JSON useful here?

JSON is useful because it gives us structured data that JavaScript can read directly as an object. Instead of parsing raw text, we can simply access fields like `data.current.temperature_2m` by name. It is the standard format for web APIs precisely because it maps so naturally to how JavaScript works.

## Why is it better to create one reusable function for all cities?

A single `loadWeatherByCity(name, lat, lon)` function means the fetch logic is written once and shared across all three cities. If we need to fix a bug or add a new field, we change it in one place instead of three. This follows the DRY principle (Don't Repeat Yourself) and makes the code easier to maintain and extend.
