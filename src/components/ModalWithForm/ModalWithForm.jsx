/* STYLES SHEETS IMPORTS */
import "./ModalWithForm.css";

/* COMPONENTS IMPORTS */
import Modal from "../Modal/Modal";

function ModalWithForm({
  onSubmit,
  children,
  buttonText,
  title,
  formName,
  isOpen,
  onClose,
  isLoading,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} name={formName}>
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
