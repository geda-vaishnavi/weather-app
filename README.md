# 📍 CityWeather - Location-Based Weather Dashboard

A dynamic web application that allows users to input any global location and instantly retrieve real-time weather data. This project showcases **clean DOM manipulation**, **event-driven programming**, and **asynchronous API integration**.

---

## 🌐 Live Project
**Experience the app here:** [https://geda-vaishnavi.github.io/weather-app/](https://geda-vaishnavi.github.io/weather-app/)

---

## 🚀 How It Works
1. **User Input:** The user enters a city or location name (e.g., "Pune" or "London") into the search field.
2. **Data Fetching:** Upon clicking 'Search' or pressing 'Enter', the app triggers a `fetch` request to the OpenWeatherMap API.
3. **Data Transformation:** The raw JSON response is processed to extract temperature, description, humidity, and wind speed.
4. **Dynamic Update:** The UI updates instantly using JavaScript to display the weather details without a page refresh.

---

## 🛠️ Technical Implementation
- **Frontend Architecture:** Semantic HTML5 and CSS3 for a clean, user-friendly interface.
- **Asynchronous Logic:** Implemented `async/await` patterns to ensure a smooth, non-blocking user experience during data retrieval.
- **API Integration:** Utilizes the **OpenWeatherMap REST API** for global weather data coverage.
- **Input Validation:** Includes basic error handling to manage cases where a city name is misspelled or not found in the database.

---

## 🧰 Tech Stack
- **Language:** JavaScript (ES6+)
- **Markup/Styles:** HTML5, CSS3 (Custom Styles/Tailwind)
- **Data Source:** OpenWeatherMap API
- **Deployment:** GitHub Pages

---

## 📂 Project Structure
```text
.
├── index.html          # Main structure and search interface
├── script.js           # API logic and DOM manipulation
├── style.css           # Responsive design and UI styling
└── README.md           # Documentation
