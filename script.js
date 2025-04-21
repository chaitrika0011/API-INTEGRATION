async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey =" 77ae25069b046e9df8b74c7c6ccb0141";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.cod === 200) {
            document.getElementById("cityName").textContent = data.name;
            document.getElementById("temperature").textContent = `🌡️ Temperature: ${data.main.temp}°C`;
            document.getElementById("weather").textContent = `☁️ Condition: ${data.weather[0].description}`;
            document.getElementById("weatherResult").style.display = "block";
        } else {
            alert("City not found!");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch weather data.");
    }
}