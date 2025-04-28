import { useState } from "react";
import closeIcon from "../../images/CloseIcon.svg";

function NewCard({ handleCreateCard, isOpen, onClose }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  function onSubmitClick(event) {
    event.preventDefault();

    const newCard = { title, link: url };
    handleCreateCard(newCard);
    setTitle("");
    setUrl("");
    onClose();
  }

  return (
    <div className={`addcard ${isOpen ? "addcard_open" : ""}`}>
      <div className="addcard__overlay">
        <button className="addcard__close-button" onClick={onClose}>
          <img
            className="addcard__close-icon"
            src={closeIcon}
            alt="duas retas cruzadas na diagonal formando a letra X"
          />
        </button>
        <h3 className="addcard__title">Novo Local</h3>
        <form
          id="card-form"
          className="addcard__form"
          name="addcard-form"
          onSubmit={onSubmitClick}
        >
          <div className="addcard__target">
            <input
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength="30"
              minLength="2"
              className="addcard__input popup__input-error"
              type="text"
              placeholder="Título"
            />
            <span className="error__message" id="local-error"></span>
          </div>
          <div className="addcard__target">
            <input
              id="url"
              name="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="addcard__input popup__input-error"
              type="url"
              placeholder="Link de imagem"
            />
            <span className="error__message" id="link-error"></span>
          </div>
          <button
            className="addcard__save-button error__button"
            type="submit"
            disabled={!title || !url}
          >
            Criar
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewCard;
