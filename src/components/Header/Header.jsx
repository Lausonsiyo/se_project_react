// STYLES SHEETS IMPORTS
import "./Header.css";

// IMAGES IMPORTS
import logo from "../../assets/logo.svg";
import avatarimg from "../../assets/avatarimg.png";

function Header({ handleAddNewGarment }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />
      <p className="header__date-and-location">DATE, LOCATION</p>
      <button
        onClick={handleAddNewGarment}
        type="button"
        className="header__add-clothes-button"
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img
          src={avatarimg}
          alt="Terrence Tegegne"
          className="header__avatar"
        />
      </div>
    </header>
  );
}
export default Header;
