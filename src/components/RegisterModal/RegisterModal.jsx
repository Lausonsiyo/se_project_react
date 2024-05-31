/* REACT DEPENDENCIES IMPORTS */
import React from "react";

/* COMPONENTS IMPORTS */
import ModalWithForm from "../ModalWithForm/ModalWithForm";

/* STYLES SHEETS IMPORTS */
import "./RegisterModal.css";

function RegisterModal({ handleCloseClick, isOpen, isLoading }) {
  return (
    <ModalWithForm
      buttonText="Sing Up"
      title="Sing Up"
      onClose={handleCloseClick}
      formName="register"
      isOpen={isOpen}
      //   onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <label htmlFor="email" className="modal__label">
        Email*
        <input
          type="email"
          id="email"
          className="modal__input"
          placeholder="Email"
          minLength="2"
          //   value={values.name}
          //   onChange={handleChange}
          name="email"
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password*
        <input
          type="password"
          id="password"
          className="modal__input"
          placeholder="Password"
          //   value={values.imageUrl}
          //   onChange={handleChange}
          name="password"
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Name*
        <input
          type="text"
          id="Name"
          className="modal__input"
          placeholder="Name"
          minLength="2"
          //   value={values.imageUrl}
          //   onChange={handleChange}
          name="name"
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Avatar Url*
        <input
          type="url"
          id="avatarUrl"
          className="modal__input"
          placeholder="Avatar Url"
          //   value={values.imageUrl}
          //   onChange={handleChange}
          name="avatarUrl"
          required
        />
      </label>
      <button className="modal__button_log-in">Or Log in</button>
    </ModalWithForm>
  );
}

export default RegisterModal;
