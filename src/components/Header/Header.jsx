/* STYLES SHEETS IMPORTS */
import "./Header.css";

/* IMAGES IMPORTS */
import logo from "../../assets/logo.svg";
import avatarimg from "../../assets/avatarimg.png";

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
      <div className="header__container header__container_type_logo">
        <img className="header__logo" src={logo} alt="Logo" />
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div
        className={`header__container ${
          isMobileMenuOpen
            ? "header__container_type_mobile"
            : "header__container_type_desktop"
        }`}
      >
        <button
          onClick={toggleMobileMenu}
          className="modal__close_type_mobile"
          type="button"
        ></button>
        <button
          onClick={handleAddNewGarment}
          type="button"
          className="header__add-clothes-button"
        >
          + Add clothes
        </button>
        <p className="header__username">Terrence Tegegne</p>
        <img
          src={avatarimg}
          alt="Terrence Tegegne"
          className="header__avatar"
        />
      </div>
      <button
        className="header__menu"
        type="button"
        onClick={toggleMobileMenu}
      ></button>
    </header>
  );
}
export default Header;
