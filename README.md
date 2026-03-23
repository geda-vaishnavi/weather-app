# 🌤️ CityWeather - Real-Time Weather Tracker

A lightweight, responsive web application that fetches live weather data using the **WeatherAPI.com** engine. This project demonstrates clean implementation of **Asynchronous JavaScript**, **Error Handling**, and **REST API Integration**.

---

## 🌐 Live Demo
**View the application here:** [http://geda-vaishnavi.github.io/weather-app/](http://geda-vaishnavi.github.io/weather-app/)

---

## 🚀 Key Features
- **Location-Based Search:** Takes any global location as input and retrieves instant weather reports.
- **Asynchronous Data Fetching:** Utilizes `async/await` and the `Fetch API` for non-blocking network requests.
- **Real-Time Updates:** Displays City/Country name, Temperature in Celsius, and Weather Conditions (e.g., Sunny, Cloudy) dynamically.
- **Error Handling:** 
  - Prevents empty searches with user alerts.
  - Handles "Location not found" scenarios via API error response checks.
  - Catches network failures using `try...catch` blocks.

---

## 🛠️ Technical Implementation
The logic for this application is built on a robust JavaScript function:
- **API Engine:** [WeatherAPI.com](https://www.weatherapi.com/)
- **State Management:** Direct DOM manipulation for fast UI updates.
- **Data Points:** 
  - `data.location.name` & `data.location.country` for precise location mapping.
  - `data.current.temp_c` for metric temperature data.
  - `data.current.condition.text` for descriptive weather states.

---

## 📂 Code Snippet (Logic Overview)
```javascript
async function getWeather() {
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // UI Updating Logic
    document.getElementById("city").innerText = `${data.location.name}, ${data.location.country}`;
    document.getElementById("temp").innerText = `🌡 Temperature: ${data.current.temp_c}°C`;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
