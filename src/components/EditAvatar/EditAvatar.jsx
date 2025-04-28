import closeIcon from "../../images/CloseIcon.svg";

function EditAvatar({ isOpen, onClose }) {
  return (
    <div
      className={`popupprofilepicture ${
        isOpen ? "popupprofilepicture_opened" : ""
      }`}
    >
      <div className="popupprofilepicture__overlay">
        <button className="popupprofilepicture__close-button" onClick={onClose}>
          <img
            className="popupprofilepicture__icon"
            src={closeIcon}
            alt="duas retas cruzadas na diagonal formando a letra X"
          />
        </button>
        <div className="popupprofilepicture__content">
          <h5 className="popupprofilepicture__title">
            Alterar a foto do perfil
          </h5>
          <form
            id="popupprofilepicture-form"
            className="popupprofilepicture__form"
            name="popupprofilepicture-form"
            required
          >
            <div className="popupprofilepicture__target">
              <input
                id="linkprofile-picture"
                required
                className="popupprofilepicture__input popupprofilepicture__input-error"
                type="url"
                placeholder="Insira um link de imagem aqui"
              />
              <span className="error__message" id="local-error"></span>
            </div>
            <button
              className="popupprofilepicture__save-button error__button"
              type="submit"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditAvatar;
