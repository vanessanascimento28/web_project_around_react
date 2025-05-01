import { useState, useEffect, useContext } from "react";
import Popup from "../Popup/Popup";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setAbout(currentUser.about || "");
    }
  }, [currentUser]);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({ name, about });
    onClose();
  }

  return (
    <Popup title="Editar Perfil" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="popup__form" name="popup-form">
        <div className="popup__target">
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength="40"
            minLength="2"
            className="popup__input popup__input-error"
            type="text"
            placeholder="Nome"
          />
          <span className="error__message" id="name-error"></span>
        </div>
        <div className="popup__target">
          <input
            id="about"
            name="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
            maxLength="200"
            minLength="2"
            className="popup__input popup__input-error"
            type="text"
            placeholder="Sobre mim"
          />
          <span className="error__message" id="about-error"></span>
        </div>
        <button className="popup__save-button error__button" type="submit">
          Salvar
        </button>
      </form>
    </Popup>
  );
}

export default EditProfilePopup;
