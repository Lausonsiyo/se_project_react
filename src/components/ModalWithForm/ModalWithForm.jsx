//style sheet
import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">Modal Title</h2>
        <button type="button" className="modal__close">
          CLOSE
        </button>
        <form className="modal__form">
          <label htmlFor="name" className="modal__labol">
            Name{" "}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>{" "}
          <label htmlFor="imageUrl" className="modal__labol">
            Image{" "}
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              placeholder="image Url"
            />
          </label>
          <fieldset className="modal__radio-button">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input type="radio" className="modal__radio-input" id="cold" />
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input type="radio" className="modal__radio-input" id="warm" />
            </label>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input type="radio" className="modal__radio-input" id="hot" />
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
