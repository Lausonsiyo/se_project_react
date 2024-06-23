/* REACT DEPENDENCIES IMPORTS */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

/* STYLES SHEETS IMPORTS */
import "./App.css";

/* UTILS IMPORT */
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { coordinates, APIkey } from "../../utils/constants.js";
import {
  getItems,
  addItem,
  removeItem,
  likeCard,
  dislikeCard,
} from "../../utils/api.js";
import * as auth from "../../utils/auth.js";

/* COMPONENTS IMPORTS */
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import Profile from "../Profile/Profile.jsx";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";

/* CONTEXT IMPORTS */
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

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

  const handleOpenLoginModal = () => {
    setActiveModal("login");
  };

  const handleOpenRegisterModal = () => {
    setActiveModal("register");
  };

  const handleOpenEditProfileModal = () => {
    setActiveModal("editProfile");
  };

  const handleCloseClick = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  /* -ADD, REMOVE - FUNCTIONALITY FUNCTIONS  */

  const onAddItem = (values, onDone) => {
    const token = localStorage.getItem("jwt");
    setIsLoading(true);
    addItem(values, token)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        onDone();
      })
      .then(handleCloseClick)
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCardDelete = () => {
    const token = localStorage.getItem("jwt");
    removeItem(selectedCard._id, token)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        handleCloseClick();
      })
      .catch((error) => console.error(error));
  };

  /* CARD LIKE AND DISLIKE HANDLER */
  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? likeCard(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard.data : item))
            );
          })
          .catch((err) => console.log(err))
      : dislikeCard(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard.data : item))
            );
          })
          .catch((err) => console.log(err));
  };

  /* USE EFFECT HOOKS */
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherdata(filteredData);
      })
      .catch(console.error);
  }, []);

  // useEffect(() => {
  //   getItems()
  //     .then((items) => {
  //       setClothingItems(items);
  //     })
  //     .catch(console.error);
  // }, []);
  useEffect(() => {
    if (currentUser._id) {
      getItems()
        .then((items) => {
          setClothingItems(items);
        })
        .catch(console.error);
    }
  }, [currentUser]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res);
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

  /* EDIT PROFILE HANDLER */
  const handleEditProfile = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");
    return auth
      .editProfile({ name, avatar }, token)
      .then((res) => {
        setCurrentUser(res);
        handleCloseClick();
      })
      .catch((err) => console.error("Error:", err));
  };

  /* AUTHORIZATION HANDLER */
  const handleSingUp = (values, onDone) => {
    auth
      .singUp(values)
      .then(() => {
        handleSingIn(values, onDone);
      })
      .catch((err) => console.error("Error signing up:", err));
  };

  const handleSingIn = (values, onDone) => {
    auth
      .singIn(values)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setCurrentUser(values);
        setIsLoggedIn(true);
        handleCloseClick();
        onDone();
      })
      .catch((err) => console.error("Error signing in", err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              isLoggedIn={isLoggedIn}
              handleOpenLoginModal={handleOpenLoginModal}
              handleOpenRegisterModal={handleOpenRegisterModal}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    isLoggedIn={isLoggedIn}
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      onCardLike={handleCardLike}
                      handleAddNewGarment={handleAddNewGarment}
                      clothingItems={clothingItems}
                      handleCardClick={handleCardClick}
                      handleOpenEditProfileModal={handleOpenEditProfileModal}
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  </ProtectedRoute>
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
          <LoginModal
            handleCloseClick={handleCloseClick}
            handleOpenLoginModal={handleOpenLoginModal}
            isLoading={isLoading}
            handleSingIn={handleSingIn}
            isOpen={activeModal === "login"}
            handleOpenRegisterModal={handleOpenRegisterModal}
            handleSingUp={handleSingUp}
          />
          <RegisterModal
            handleCloseClick={handleCloseClick}
            handleOpenRegisterModal={handleOpenRegisterModal}
            isLoading={isLoading}
            handleSingUp={handleSingUp}
            isOpen={activeModal === "register"}
            handleOpenLoginModal={handleOpenLoginModal}
          />
          <EditProfileModal
            isOpen={activeModal === "editProfile"}
            handleCloseClick={handleCloseClick}
            isLoading={isLoading}
            handleEditProfile={handleEditProfile}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
