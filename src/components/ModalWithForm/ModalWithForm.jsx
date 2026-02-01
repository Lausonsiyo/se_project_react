//style sheet
import "./ModalWithForm.css";

//component import
import "../Modal/Modal.jsx";
import Modal from "../Modal/Modal.jsx";

function ModalWithForm({ onClose, isOpen, children, title }) {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <h2 className="modal__title">{title}</h2>
      <form action="" className="modal__form">
        {children}
        <button className="modal__submit" type="submit">
          Submit
        </button>
      </form>
    </Modal>
  );
}

export default ModalWithForm;
