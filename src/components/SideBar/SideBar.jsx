/* REACT DEPENDENCIES IMPORTS */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

/* STYLE SHEET IMPORTS */
import "./SideBar.css";

/* CONTEXT IMPORTS */
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function SideBar({ setIsLoggedIn, handleOpenEditProfileModal }) {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        {currentUser?.avatar ? (
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="header__avatar"
          />
        ) : (
          <div
            className="header__avatar-placeholder"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : "?"}
          </div>
        )}
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <div className="sidebar__user-interface">
        <button
          className="sidebar__user-button"
          type="text"
          onClick={handleOpenEditProfileModal}
        >
          Change profile data
        </button>
        <button
          className="sidebar__user-button"
          type="text"
          onClick={() => {
            navigate("/");
            setIsLoggedIn(false);
            localStorage.removeItem("jwt");
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
