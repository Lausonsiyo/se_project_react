// REACT DEPENDENCIES IMPORTS
import { useContext } from "react";

//CONTEXT IMPORTS
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

//IMAGES IMPORT
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

//STYLE SHEET IMPORT
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weatherOption =
    weatherOptions.find((option) => {
      return (
        option.day === weatherData.isDay &&
        option.condition === weatherData.condition
      );
    }) || defaultWeatherOptions[weatherData.isDay ? "day" : "night"];

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]} &deg;{""}{" "}
        {currentTemperatureUnit === "C" ? "C" : "F"}
      </p>
      <img src={weatherOption.url} alt="" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
