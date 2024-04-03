// STYLES SHEETS IMPORTS
import "./WeatherCard.css";

// IMAGES IMPORTS
import sunny from "../../assets/sunny.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg;</p>
      <img src={sunny} alt="sunny" className="weather-card__img" />
    </section>
  );
}

export default WeatherCard;
