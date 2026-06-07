const temperatureBtn = document.getElementById("temperatureBtn");
const weatherOutput = document.getElementById("weatherOutput");

temperatureBtn.addEventListener("click", function () {

    weatherOutput.textContent = "Loading temperature...";

    fetch("https://api.open-meteo.com/v1/forecast?latitude=35.99&longitude=-78.90&current=temperature_2m")

        .then(response => response.json())

        .then(data => {

            weatherOutput.textContent =
                "Current Temperature: " +
                data.current.temperature_2m +
                "°C";

        })

        .catch(error => {

            weatherOutput.textContent =
                "Unable to load temperature.";

            console.log(error);

        });

});

const forecastBtn = document.getElementById("forecastBtn");

forecastBtn.addEventListener("click", function () {

    weatherOutput.textContent = "Loading forecast...";

    fetch("https://api.open-meteo.com/v1/forecast?latitude=35.99&longitude=-78.90&current=weather_code")

        .then(response => response.json())

        .then(data => {

            weatherOutput.textContent =
                "Weather Code: " +
                data.current.weather_code;

        })

        .catch(error => {

            weatherOutput.textContent =
                "Unable to load forecast.";

            console.log(error);

        });

});