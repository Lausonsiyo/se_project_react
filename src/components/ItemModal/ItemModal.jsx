/* STYLES SHEETS IMPORTS */
import "./ItemModal.css";

function ItemModal({ cardData, onClose, isOpen }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"} modal_type_preview`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} className="modal__close" type="button" />
        <img src={cardData.link} alt={cardData.name} className="modal__image" />
        <div className="modal__footer">
          <p className="modal__caption">{cardData.name}</p>
          <p className="modal__weather">Weather: {cardData.weather}</p>
          <button className="modal__delete-button">Delete Item</button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
