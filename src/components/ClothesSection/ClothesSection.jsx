/* STRYLE SHEET IMPORTS */
import "./ClothesSection.css";

/* COMPONENT IMPORTS */
import ItemCard from "../ItemCard/ItemCard";

import { defaultClothingItems } from "../../utils/constants";

function ClothesSection({ handleCardClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__navbar">
        <p className="clothes-section__header">Your item</p>
        <button className="clothes-section__button">+ Add New</button>
      </div>
      <ul className="clothes-section__items">
        {defaultClothingItems.map((item) => {
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
