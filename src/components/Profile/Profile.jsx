/* STYLE SHEET IMPORTS */
import "./Profile.css";

/* COMPONENTS IMPORTS */
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({ handleCardClick, clothingItems, handleAddNewGarment }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
          handleAddNewGarment={handleAddNewGarment}
        />
      </section>
    </div>
  );
}

export default Profile;
