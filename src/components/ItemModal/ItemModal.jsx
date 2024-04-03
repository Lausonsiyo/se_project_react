/* STYLES SHEETS IMPORTS */
import "./ItemModal.css";

function ItemModal({ activeModal, cardData, onClose }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          className="modal__close"
          type="button"
        ></button>
        <img src={cardData.link} alt={cardData.name} className="modal__image" />
        <div className="modal__footer">
          <p className="modal__caption">{cardData.name}</p>
          <p className="modal__weather">Weather: {cardData.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
