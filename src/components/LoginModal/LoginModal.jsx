/* REACT DEPENDENCIES IMPORTS */
import React from "react";

/* COMPONENTS IMPORTS */
import ModalWithForm from "../ModalWithForm/ModalWithForm";

/* STYLES SHEETS IMPORTS */
import "./LoginModal.css";

/* HOOKS IMPORTS */
import { useForm } from "../../hooks/hooks.jsx";

function LoginModal({
  handleCloseClick,
  isOpen,
  isLoading,
  handleSingIn,
  handleOpenRegisterModal,
  handleSingUp,
}) {
  const { values, handleChange, setValues, resetForm } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      handleSingUp(values, resetForm);
    } else {
      handleSingIn(values, resetForm);
    }
  };
  return (
    <ModalWithForm
      buttonText="Login"
      title="Login"
      onClose={handleCloseClick}
      formName="login"
      isOpen={isOpen}
      onSubmit={handleSubmit}
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
          value={values.email}
          onChange={handleChange}
          name="email"
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          id="password"
          className="modal__input"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          name="password"
          required
        />
      </label>

      <button
        className="modal__button_sing-up"
        onClick={handleOpenRegisterModal}
      >
        Or Sing Up
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;
