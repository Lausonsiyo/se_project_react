/* UTILS IMPORTS  */
import { defaultClothingItems } from "../../utils/constants";

/* STYLES SHEETS IMPORTS */
import "./Main.css";

/* COMPONENTS IMPORTS */
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherData, handleCardClick }) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp.F} &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
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
