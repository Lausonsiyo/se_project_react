//style sheet import
import "./ItemModal.css";

//components import
import Modal from "../Modal/Modal";

function ItemModal({ isOpen, onClose, card }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <img src={card.link} alt={card.name} className="modal__image" />
      <div className="modal__footer">
        <p className="modal__title">{card.name}</p>
        <p className="modal__weather">Weather: {card.weather}</p>
      </div>
    </Modal>
  );
}

export default ItemModal;
