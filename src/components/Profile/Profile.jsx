/* STYLE SHEET IMPORTS */
import "./Profile.css";

/* COMPONENTS IMPORTS */
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({
  handleCardClick,
  clothingItems,
  handleAddNewGarment,
  handleOpenEditProfileModal,
  isLoggedIn,
  setIsLoggedIn,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleOpenEditProfileModal={handleOpenEditProfileModal}
          setIsLoggedIn={setIsLoggedIn}
        />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          handleAddNewGarment={handleAddNewGarment}
          isLoggedIn={isLoggedIn}
        />
      </section>
    </div>
  );
}

export default Profile;
