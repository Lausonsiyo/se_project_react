/* REACT DEPENDENCIES IMPORTS */
import React, { useState } from "react";

/* COMPONENTS IMPORTS */
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ handleCloseClick, isOpen, onAddItem }) {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setImageUrl] = useState("");
  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New garment"
      onClose={handleCloseClick}
      isOpen={isOpen}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="url"
          id="imageUrl"
          className="modal__input"
          placeholder="Image URL"
          minLength="1"
          maxLength="30"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <div className="modal__radio-wrapper">
          <input
            id="hot"
            type="radio"
            name="type"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            value="hot"
          />
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            Hot
          </label>
        </div>
        <div className="modal__radio-wrapper">
          <input
            id="warm"
            type="radio"
            name="type"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            value="warm"
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
            name="type"
            className="modal__radio-input"
            onChange={handleWeatherChange}
            value="cold"
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
