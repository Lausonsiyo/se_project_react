/* REACT DEPENDENCIES IMPORTS */
import { useContext } from "react";

/*  COMPONENTS IMPORTS */
import Modal from "../Modal/Modal";

/* STYLES SHEETS IMPORTS */
import "./ItemModal.css";

/* CONTEXT IMPORTS */
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function ItemModal({
  cardData,
  onClose,
  isOpen,
  handleOpenDeleteConfirmModal,
}) {
  const handleDeleteButtonModal = () => {
    handleOpenDeleteConfirmModal(cardData._id);
  };

  const currentUser = useContext(CurrentUserContext);
  const isOwn = cardData.owner === currentUser._id;

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
        <div>
          {isOwn ? (
            <button
              className="modal__delete-button"
              onClick={handleDeleteButtonModal}
            >
              Delete Item
            </button>
          ) : null}
        </div>
      </div>
    </Modal>
  );
}

export default ItemModal;
