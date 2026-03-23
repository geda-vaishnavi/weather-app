const apiKey = "e74b224cd82147ff8cd134242261703";

async function getWeather() {
  const location = document.getElementById("locationInput").value;

  if (!location) {
    alert("Please enter a location");
    return;
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.error) {
      alert("Location not found");
      return;
    }

    document.getElementById("city").innerText = 
      `${data.location.name}, ${data.location.country}`;

    document.getElementById("temp").innerText = 
      `🌡 Temperature: ${data.current.temp_c}°C`;

    document.getElementById("condition").innerText = 
      `☁️ Condition: ${data.current.condition.text}`;

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
  
}
