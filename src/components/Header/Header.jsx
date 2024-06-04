/* REACT DEPENDENCIES IMPORTS */
import { useContext } from "react";
import { Link } from "react-router-dom";

/* STYLES SHEETS IMPORTS */
import "./Header.css";

/* IMAGES IMPORTS */
import logo from "../../assets/logo.svg";
import avatarimg from "../../assets/avatarimg.png";

/*  COMPONENTS IMPORTS */
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

/* CONTEXT IMPORTS */
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Header({
  handleAddNewGarment,
  weatherData,
  isMobileMenuOpen,
  toggleMobileMenu,
  isLoggedIn,
  handleOpenRegisterModal,
  handleOpenLoginModal,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <button
        onClick={toggleMobileMenu}
        className={
          isMobileMenuOpen ? "modal__close_type_mobile" : "header__menu"
        }
        type="button"
      />
      <div
        className={`header__container ${
          isMobileMenuOpen
            ? "header__container_type_mobile"
            : "header__container_type_desktop"
        }`}
      >
        {!isMobileMenuOpen && <ToggleSwitch />}
        {isLoggedIn ? (
          <>
            <button
              onClick={handleAddNewGarment}
              type="button"
              className="header__add-clothes-button"
            >
              + Add clothes
            </button>
            <Link className="header__username-link" to="/profile">
              <div className="header__profile-info">
                <p className="header__username">Terrence Tegegne</p>
                <img
                  src={avatarimg}
                  alt="Terrence Tegegne"
                  className="header__avatar"
                />
              </div>
            </Link>
          </>
        ) : (
          <>
            <div className="header__logout-button-container">
              <button
                className="header__button"
                onClick={handleOpenRegisterModal}
                type="button"
              >
                Sing Up
              </button>
              <button
                className="header__button"
                onClick={handleOpenLoginModal}
                type="button"
              >
                Log In
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
export default Header;
