/* REACT DEPENDENCIES IMPORTS */
import { useEffect, useState } from "react";

/* STYLES SHEETS IMPORTS */
import "./App.css";

/* UTILS IMPORT */
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { coordinates, APIkey } from "../../utils/constants.js";

/* COMPONENTS IMPORTS */
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";

/* CONTEXT IMPORTS */
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function App() {
  const [weatherData, setWeatherdata] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  function toggleMobileMenu() {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(true);
    }
  }

  const handleAddNewGarment = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleCloseClick = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherdata(filteredData);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header
            handleAddNewGarment={handleAddNewGarment}
            toggleMobileMenu={toggleMobileMenu}
            weatherData={weatherData}
            isMobileMenuOpen={isMobileMenuOpen}
          />
          <Main weatherData={weatherData} handleCardClick={handleCardClick} />
          <Footer />
        </div>
        <ModalWithForm
          buttonText="Add garment"
          title="New garment"
          onClose={handleCloseClick}
          isOpen={activeModal === "add-garment"}
        >
          <label htmlFor="name" className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <div className="modal__radio-wrapper">
              <input
                id="hot"
                type="radio"
                name="type"
                className="modal__radio-input"
              />
              <label
                htmlFor="hot"
                className="modal__label modal__label_type_radio"
              >
                Hot
              </label>
            </div>
            <div className="modal__radio-wrapper">
              <input
                id="warm"
                type="radio"
                name="type"
                className="modal__radio-input"
              />
              <label
                htmlFor="warm"
                className="modal__label modal__label_type_radio"
              >
                Warm
              </label>
            </div>
            <div className="modal__radio-wrapper">
              <input
                id="cold"
                type="radio"
                name="type"
                className="modal__radio-input"
              />
              <label
                htmlFor="cold"
                className="modal__label modal__label_type_radio"
              >
                Cold
              </label>
            </div>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          isOpen={activeModal === "preview"}
          cardData={selectedCard}
          onClose={handleCloseClick}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
