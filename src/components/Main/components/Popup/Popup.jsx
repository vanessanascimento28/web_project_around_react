import { useEffect } from "react";
import closeIcon from "../../../../images/CloseIcon.svg";

function Popup({ title, onClose, children, customOverlayClass = "" }) {
  function handleOverlayClick(e) {
    if (e.target.classList.contains("popup__overlay")) {
      onClose();
    }
  }

  function handleEscKey(e) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  return (
    <div className="popup popup_opened">
      <div
        className={`popup__overlay ${customOverlayClass}`}
        onClick={handleOverlayClick}
      >
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
          {title && <h3 className="popup__title">{title}</h3>}
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;
