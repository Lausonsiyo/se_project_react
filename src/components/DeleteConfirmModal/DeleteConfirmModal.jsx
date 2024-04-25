/* STYLE SHEETS */
import "./DeleteConfirmModal.css";

function DeleteConfirmModal({ onClose, isOpen }) {
  return (
    <div className={`deleteConfirmModal ${isOpen && "modal_opened"}`}>
      <div className="deleteConfirmModal__container">
        <button
          className="deleteConfirmModal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <p className="deleteConfirmModal__text">
          Are you sure you want to delete this item?
        </p>
        <p className="deleteConfirmModal__text">This action is irreversible.</p>
        <button
          className="deleteConfirmModal__confirmation-button"
          type="button"
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
      </div>
    </div>
  );
}

export default DeleteConfirmModal;