import closeIcon from "../../images/CloseIcon.svg";

function Popup({ title, isOpen, onClose, children }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__overlay">
        <div className="popup__content">
          <button
            className="popup__close-button"
            onClick={onClose}
            aria-label="Fechar"
            type="button"
          >
            <img
              className="popup__icon"
              src={closeIcon}
              alt="Ícone de fechar"
            />
          </button>
          <h3 className="popup__title">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;

