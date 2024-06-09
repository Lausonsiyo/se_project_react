/* REACT DEPENDENCIES IMPORTS */
import { useEffect, useContext } from "react";

/* COMPONENTS IMPORTS */
import ModalWithForm from "../ModalWithForm/ModalWithForm";

/* CONTEXT IMPORTS */
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

/* HOOKS IMPORTS */
import { useForm } from "../../hooks/hooks.jsx";

function EditProfileModal({
  handleEditProfile,
  isLoading,
  isOpen,
  handleCloseClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, setValues } = useForm({
    // name: currentUser?.name,
    // avatar: currentUser.avatar,
    name: "",
    avatar: "",
  });

  useEffect(() => {
    console.log(currentUser);
    if (isOpen) {
      setValues(currentUser);
    }
  }, [isOpen, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile(values);
  };

  return (
    <ModalWithForm
      buttonText="Save Changes"
      title="Change profile data"
      formName="editProfile"
      onClose={handleCloseClick}
      isOpen={isOpen}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          //   id="name"
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
      <label htmlFor="avatar" className="modal__label">
        Avatar
        <input
          type="url"
          //   id="avatar"
          className="modal__input"
          placeholder="Image URL"
          value={values.avatar}
          onChange={handleChange}
          name="avatar"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
