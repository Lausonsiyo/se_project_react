import Modal from "../Modal/Modal";
/* STYLES SHEETS IMPORTS */
import "./ItemModal.css";

function ItemModal({
  cardData,
  onClose,
  isOpen,
  handleOpenDeleteConfirmModal,
}) {
  const handleDeleteButtonModal = () => {
    handleOpenDeleteConfirmModal(cardData._id);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} name="image">
      <img
        src={cardData.imageUrl}
        alt={cardData.name}
        className="modal__image"
      />
      <div className="modal__footer">
        <p className="modal__caption">{cardData.name}</p>
        <p className="modal__weather">Weather: {cardData.weather}</p>
        <button
          className="modal__delete-button"
          onClick={handleDeleteButtonModal}
        >
          Delete Item
        </button>
      </div>
    </Modal>
  );
}

export default ItemModal;
