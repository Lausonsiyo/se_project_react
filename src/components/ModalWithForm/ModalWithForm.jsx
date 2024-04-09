// STYLES SHEETS IMPORTS
import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, isOpen, onClose }) {
  return (
    //<div className={`modal ${isOpen && "modal_opened"} modal_type_preview`}>
    <div className={`modal ${isOpen && "modal_opened"} modal_type_add-garment`}>
      <div className="modal__content modal__content_type_add-garment">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} className="modal__close" type="button" />
        <form className="modal__form">
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
