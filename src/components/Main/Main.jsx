/* REACT DEPENDENCIES IMPORTS */
import { useContext } from "react";

/* CONTEXTS IMPORTS */
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

/* STYLES SHEETS IMPORTS */
import "./Main.css";

/* COMPONENTS IMPORTS */
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({
  isLoggedIn,
  onCardLike,
  weatherData,
  handleCardClick,
  clothingItems,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]} &deg;{" "}
          {currentTemperatureUnit === "C" ? "C" : "F"} / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  onCardLike={onCardLike}
                  isLoggedIn={isLoggedIn}
                />
              );
            })}
        </ul>
        <button
          className="cards__button-randomize"
          id="randomize-button"
          type="button"
        >
          Randomize
        </button>
      </section>
    </main>
  );
}

export default Main;
