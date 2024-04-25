/* REACT DEPENDENCIES IMPORTS */
import { Link } from "react-router-dom";

/* STYLES SHEETS IMPORTS */
import "./Header.css";

/* IMAGES IMPORTS */
import logo from "../../assets/logo.svg";
import avatarimg from "../../assets/avatarimg.png";

/*  COMPONENTS IMPORTS */
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({
  handleAddNewGarment,
  weatherData,
  isMobileMenuOpen,
  toggleMobileMenu,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
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
      </div>
    </header>
  );
}
export default Header;
