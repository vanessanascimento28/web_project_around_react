import { useEffect } from "react";
import closeIcon from "../../../../images/CloseIcon.svg";

function ImagePopup({ card, onClose }) {
  useEffect(() => {
    function handleEscClose(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    if (card) {
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [card, onClose]);

  if (!card) return null;

  return (
    <div className="imagepopup imagepopup_opened" role="dialog">
      <div className="imagepopup__overlay">
        <button
          className="imagepopup__close-button"
          onClick={onClose}
          aria-label="Fechar visualização da imagem"
        >
          <img
            className="imagepopup__close-icon"
            src={closeIcon}
            alt="ícone de fechar"
          />
        </button>
        <img
          className="imagepopup__image"
          src={card.link}
          alt={card.name || "Imagem ampliada"}
        />
        <p className="imagepopup__title">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
