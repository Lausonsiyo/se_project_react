/* REACT DEPENDENCIES IMPORTS */
import React from "react";

/* COMPONENTS IMPORTS */
import ModalWithForm from "../ModalWithForm/ModalWithForm";

/* STYLES SHEETS IMPORTS */
import "./LoginModal.css";

function LoginModal({ handleCloseClick, isOpen, isLoading }) {
  return (
    <ModalWithForm
      buttonText="Login"
      title="Login"
      onClose={handleCloseClick}
      formName="login"
      isOpen={isOpen}
      //   onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="text"
          id="email"
          className="modal__input"
          placeholder="Email"
          minLength="1"
          //   value={values.name}
          //   onChange={handleChange}
          name="email"
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="url"
          id="password"
          className="modal__input"
          placeholder="Password"
          //   value={values.imageUrl}
          //   onChange={handleChange}
          name="password"
          required
        />
      </label>

      <button className="modal__button_sing-up">Or Sing Up</button>
    </ModalWithForm>
  );
}

export default LoginModal;
