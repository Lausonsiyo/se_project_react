/* STYLES SHEETS IMPORTS */
import "./ModalWithForm.css";
import Modal from "../Modal/Modal";

function ModalWithForm({
  onSubmit,
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  isLoading,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} name="addGarment">
      <h2 className="modal__title">{title}</h2>
      <form className="modal__form" onSubmit={onSubmit}>
        {children}
        <button className="modal__submit" type="submit">
          {isLoading ? "Saving..." : buttonText}
        </button>
      </form>
    </Modal>
  );
}

export default ModalWithForm;
