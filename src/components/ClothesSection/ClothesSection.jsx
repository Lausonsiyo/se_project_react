/* STRYLE SHEET IMPORTS */
import "./ClothesSection.css";

/* COMPONENT IMPORTS */
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  handleCardClick,
  clothingItems,
  handleAddNewGarment,
}) {
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
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
