/* REACT DEPENDENCIES IMPORTS */
import { useContext } from "react";

/* STRYLE SHEET IMPORTS */
import "./ClothesSection.css";

/* COMPONENT IMPORTS */
import ItemCard from "../ItemCard/ItemCard";

/* CONTEXT IMPORTS */
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function ClothesSection({
  handleCardClick,
  clothingItems,
  handleAddNewGarment,
  onCardLike,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  // const ownCards = clothingItems.filter(
  //   (item) => item.owner === currentUser._id
  // );
  const ownCards = currentUser
    ? clothingItems.filter((item) => item.owner === currentUser._id)
    : [];

  return (
    <div className="clothes-section">
      <div className="clothes-section__navbar">
        <p className="clothes-section__header">Your item</p>
        <button
          className="clothes-section__button"
          onClick={handleAddNewGarment}
        >
          + Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {ownCards.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
              isLoggedIn={isLoggedIn}
              onCardLike={onCardLike}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
