import { useState, useEffect } from "react";

function NewCard({ onAddPlaceSubmit, onClose }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [titleError, setTitleError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setTitle("");
    setUrl("");
    setTitleError("");
    setUrlError("");
    setIsValid(false);
  }, [onClose]); // ou useEffect(() => {...}, []) se quiser resetar só na montagem

  useEffect(() => {
    const titleValid = title.length >= 2 && title.length <= 30;
    const urlValid = /^https?:\/\/\S+\.\S+/.test(url);

    setTitleError(
      titleValid || title === ""
        ? ""
        : "O título deve ter entre 2 e 30 caracteres."
    );
    setUrlError(
      urlValid || url === ""
        ? ""
        : "Insira um link válido (http:// ou https://)"
    );

    setIsValid(titleValid && urlValid);
  }, [title, url]);

  function onSubmitClick(event) {
    event.preventDefault();

    const newCard = {
      name: title,
      link: url,
    };

    onAddPlaceSubmit(newCard);
  }

  return (
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
        <span className="error__message" id="local-error">
          {titleError}
        </span>
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
        <span className="error__message" id="link-error">
          {urlError}
        </span>
      </div>
      <button
        className={`addcard__save-button ${!isValid ? "error__button" : ""}`}
        type="submit"
        disabled={!isValid}
      >
        Criar
      </button>
    </form>
  );
}

export default NewCard;
