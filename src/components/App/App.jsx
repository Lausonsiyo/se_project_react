//React
import { useEffect, useState } from "react";

// Components Imports
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Main from "../Main/Main.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";

//Style sheet import
import "./App.css";

//API imports
import { filterWeatherData, getWeather } from "../../utils/weatherApi.js";

//Constants imports
import { APIkey, coordinates } from "../../utils/constants.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  //Handlers
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleClose = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  // useEffect to Trigger weather API fetch
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        console.log(data);

        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Main handleCardClick={handleCardClick} weatherData={weatherData} />
          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal == "add-garment"}
          onClose={handleClose}
        />
        <ItemModal
          card={selectedCard}
          isOpen={activeModal == "preview"}
          onClose={handleClose}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
