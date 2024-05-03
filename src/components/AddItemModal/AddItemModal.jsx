/* REACT DEPENDENCIES IMPORTS */
import React from "react";

/* COMPONENTS IMPORTS */
import ModalWithForm from "../ModalWithForm/ModalWithForm";

/* HOOKS IMPORTS */
import { useForm } from "../../hooks/hooks.jsx";

function AddItemModal({ handleCloseClick, isOpen, onAddItem, isLoading }) {
  const { values, handleChange, setValues } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(values);
  };

  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New garment"
      onClose={handleCloseClick}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          id="name"
          className="modal__input"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
          name="name"
          required
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="url"
          id="imageUrl"
          className="modal__input"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          name="imageUrl"
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <div className="modal__radio-wrapper">
          <input
            id="hot"
            type="radio"
            name="weather"
            className="modal__radio-input"
            onChange={handleChange}
            value="hot"
            checked={values.weather === "hot"}
            required
          />
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            Hot
          </label>
        </div>
        <div className="modal__radio-wrapper">
          <input
            id="warm"
            type="radio"
            name="weather"
            className="modal__radio-input"
            onChange={handleChange}
            value="warm"
            checked={values.weather === "warm"}
          />
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            Warm
          </label>
        </div>
        <div className="modal__radio-wrapper">
          <input
            id="cold"
            type="radio"
            name="weather"
            className="modal__radio-input"
            onChange={handleChange}
            value="cold"
            checked={values.weather === "cold"}
          />
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
