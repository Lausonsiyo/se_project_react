// STYLE SHEET IMPORT
import "./Modal.css";

function Modal({ isOpen, onClose, children }) {
  return (
    <div className={`modal ${isOpen && "modal__opened"}`}>
      <div className="modal__content">
        <div className="modal_container">
          <button onClick={onClose} type="button" className="modal__close">
            CLOSE
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
