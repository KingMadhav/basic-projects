const apiKey = "bd5e378503939ddaee76f12ad7a97608";
const SearchBox = document.querySelector(".search input");
const SearchButton = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function getWeather(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(
    `${apiURL} + ${city} + &appid=${apiKey} &units=metric`
  );
  if (response.status === 404) {
    document.querySelector(".error").classList.add("opacity-100");
    document.querySelector(".main").classList.add("opacity-0");
    document.querySelector(".WindAndHumidity").classList.add("opacity-0");
  } else {
    var data = await response.json();
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round((data.main.temp)-273) + "°C";
    document.querySelector(".humidpercent").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + "Km/hr";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "./img/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "./img/rain.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "./img/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "./img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "./img/mist.png";
    }

    document.querySelector(".error").classList.remove("opacity-100");
    document.querySelector(".main").classList.remove("opacity-0");
    document.querySelector(".WindAndHumidity").classList.remove("opacity-0");
  }
}

SearchButton.addEventListener("click", () => {
  getWeather(SearchBox.value);
});
// getWeather();
