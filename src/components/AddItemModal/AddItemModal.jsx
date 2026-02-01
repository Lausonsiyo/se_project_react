//Components Imports
import ModalWithForm from "../ModalWithForm/ModalWithForm";

//Style sheet import
import "./AddItemModal.css";

function AddItemModal({ isOpen, onClose }) {
  return (
    <ModalWithForm onClose={onClose} isOpen={isOpen} title={"New Garment"}>
      <label htmlFor="name" className="modal__label">
        Name
        <input
          id="name"
          type="text"
          className="modal__input"
          placeholder="Name"
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image URL
        <input
          id="imageUrl"
          type="url"
          className="modal__input"
          placeholder="Image Url"
        />
      </label>
      <fieldset className="modal__radio-button">
        <legend className="modal__legend">Select the weather type:</legend>
        <div className="modal__radio-buttons_wrapper">
          <div className="modal__radio-option">
            <input
              type="radio"
              name="weather"
              id="hot"
              className="modal__radio-input"
            />
            <label htmlFor="hot" className="modal__label">
              Hot
            </label>
          </div>
          <div className="modal__radio-option">
            <input
              type="radio"
              name="weather"
              id="warm"
              className="modal__radio-input"
            />
            <label htmlFor="warm" className="modal__label">
              Warm
            </label>
          </div>
          <div className="modal__radio-option">
            <input
              type="radio"
              name="weather"
              id="cold"
              className="modal__radio-input"
            />
            <label htmlFor="cold" className="modal__label">
              Cold
            </label>
          </div>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
