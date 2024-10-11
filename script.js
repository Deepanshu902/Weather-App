const apikey = "0d8e051eb7707b13a4435505bf26913f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");
const weather_icon = document.querySelector(".icon");

async function checkWeather(city) {
    const response = await fetch(`${apiurl}${city}&appid=${apikey}`);
    const data = await response.json();

    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").textContent = data.main.humidity;
    document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;

    const weatherIcons = {
        Clouds: "images/clouds.png",
        Clear: "images/clear.png",
        Rain: "images/rain.png",
        Drizzle: "images/drizzle.png",
        Snow: "images/snow.png",
        Mist: "images/mist.png"
    };

    weather_icon.src = weatherIcons[data.weather[0].main] || "images/default.png";
}

searchbutton.addEventListener("click", () => checkWeather(searchbox.value));
