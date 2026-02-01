//REACT DEPENDENCIES IMPORT
import { useContext } from "react";

//CONTEXT IMPORTS
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

//COMPONENTS IMPORTS
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";

//CONSTANTS IMPORT
import { defaultClothingItems } from "../../utils/constants";

function Main({ weatherData, handleCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]} &deg; {""}
          {currentTemperatureUnit === "C" ? "C" : "F"} / You may want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  onCardClick={handleCardClick}
                  key={item._id}
                  item={item}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
