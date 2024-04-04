// STYLES SHEETS IMPORTS
import "./WeatherCard.css";

/* UTILS IMPORTS  */
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  console.log(filteredOptions);

  let weatherOption;
  if (filteredOptions.length === 0) {
    // weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img
        src={weatherOption?.url}
        alt={`Card showing ${
          weatherOption?.day ? "day" : "night"
        }time weather icon`}
        className="weather-card__img"
      />
    </section>
  );
}

export default WeatherCard;
