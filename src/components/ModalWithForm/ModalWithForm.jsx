/* STYLES SHEETS IMPORTS */
import "./ModalWithForm.css";

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
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} className="modal__close" type="button" />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className="modal__submit" type="submit">
            {isLoading ? "Saving..." : buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
