//IMAGES IMPORT
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
//STYLE SHEET IMPORT
import "./Header.css";

function Header() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} className="header__logo" alt="wtwr-logo" />

        <div className="header__date">
          <p>{currentDate} current wather</p>
        </div>

        <button className="header__buttons_add-clothes">+ Add Clothes</button>
        <div className="header__user-information">
          <p className="header__user-information_name">Maria Corina</p>
          <img
            className="header__user-information_avatar"
            src={avatar}
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
