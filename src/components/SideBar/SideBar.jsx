/* STYLE SHEET IMPORTS */
import "./SideBar.css";

/* IMAGES IMPORTS */
import avatarimg from "../../assets/avatarimg.png";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatarimg} alt="Avatar Image" />
      <p className="sidebar__username">User Name</p>
    </div>
  );
}

export default SideBar;
