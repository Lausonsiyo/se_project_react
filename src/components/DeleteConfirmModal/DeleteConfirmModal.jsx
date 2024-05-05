/* STYLE SHEETS */
import Modal from "../Modal/Modal";
import "./DeleteConfirmModal.css";

function DeleteConfirmModal({ onClose, isOpen, handleCardDelete }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} name="deleteConfirmation">
      <p className="deleteConfirmModal__text">
        Are you sure you want to delete this item?
      </p>
      <p className="deleteConfirmModal__text">This action is irreversible.</p>
      <button
        className="deleteConfirmModal__confirmation-button"
        type="button"
        onClick={handleCardDelete}
      >
        Yes, delete item
      </button>
      <button
        className="deleteConfirmModal__cancelation-button"
        type="button"
        onClick={onClose}
      >
        Cancel
      </button>
    </Modal>
  );
}

export default DeleteConfirmModal;
