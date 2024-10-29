const apiKey = "1acd5567bf8a523d711f57529b90eba3"; // Replace 'YOUR_API_KEY_HERE' with your actual API key

function fetchWeather(city, elementId) {
  // Construct the API URL dynamically
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Fetch data from OpenWeatherMap API
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Extract weather data
      const temperature = data.main.temp;
      const feelsLike = data.main.feels_like;
      const windSpeed = data.wind.speed;
      const humidity = data.main.humidity;
      const visibility = data.visibility;
      const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
      const coordinates = `Lat: ${data.coord.lat}, Lon: ${data.coord.lon}`;

      // Update HTML content with weather data
      document.querySelector(
        `#${elementId} .temperature`
      ).textContent = `Temperature: ${temperature}°C`;
      document.querySelector(
        `#${elementId} .feels-like`
      ).textContent = `Feels Like: ${feelsLike}°C`;
      document.querySelector(
        `#${elementId} .wind-speed`
      ).textContent = `Wind Speed: ${windSpeed} m/s`;
      document.querySelector(
        `#${elementId} .humidity`
      ).textContent = `Humidity: ${humidity} %`;
      document.querySelector(
        `#${elementId} .visibility`
      ).textContent = `Visibility: ${visibility} meters`;
      document.querySelector(
        `#${elementId} .coordinates`
      ).textContent = `Coordinates: ${coordinates}`;
      document.querySelector(
        `#${elementId} .sunrise`
      ).textContent = `Sunrise: ${sunrise}`;
      document.querySelector(
        `#${elementId} .sunset`
      ).textContent = `Sunset: ${sunset}`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      // Display error message
      document.querySelector(`#${elementId} .error`).textContent =
        "Error loading data";
    });
}

// Example usage
fetchWeather("Mumbai", "mumbai-weather");
fetchWeather("Los Angeles", "los_angeles-weather");
fetchWeather("Paris", "paris-weather");
fetchWeather("Tokyo", "tokyo-weather");
