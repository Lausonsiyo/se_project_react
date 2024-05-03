/* REACT DEPENDENCIES IMPORTS */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

/* STYLES SHEETS IMPORTS */
import "./App.css";

/* UTILS IMPORT */
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { coordinates, APIkey } from "../../utils/constants.js";
import { getItems, addItem, removeItem } from "../../utils/api.js";

/* COMPONENTS IMPORTS */
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal.jsx";

/* CONTEXT IMPORTS */
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function App() {
  /* INITIAL CONTEXTS-/-USESTATE HOOKS  */
  const [weatherData, setWeatherdata] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /* RESPONSIVE MENU MOBILE FUNCTION */
  function toggleMobileMenu() {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(true);
    }
  }

  /* HANDLER FUNCTIONS */
  const handleAddNewGarment = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleOpenDeleteConfirmModal = () => {
    setActiveModal("deleteConfirm");
  };

  const handleCloseClick = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  /* -ADD, REMOVE- FUNCTIONALITY FUNCTIONS  */
  const onAddItem = (values) => {
    setIsLoading(true);
    addItem(values)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
      })
      .then(handleCloseClick)
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCardDelete = () => {
    removeItem(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        handleCloseClick();
      })
      .catch((error) => console.error(error));
  };

  /* HOOKS */
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherdata(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
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
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleAddNewGarment={handleAddNewGarment}
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                />
              }
            />
          </Routes>

          <Footer />
        </div>
        <AddItemModal
          handleCloseClick={handleCloseClick}
          isOpen={activeModal === "add-garment"}
          onAddItem={onAddItem}
          isLoading={isLoading}
        />
        <ItemModal
          isOpen={activeModal === "preview"}
          cardData={selectedCard}
          onClose={handleCloseClick}
          handleOpenDeleteConfirmModal={handleOpenDeleteConfirmModal}
        />
        <DeleteConfirmModal
          isOpen={activeModal === "deleteConfirm"}
          onClose={handleCloseClick}
          handleCardDelete={handleCardDelete}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
