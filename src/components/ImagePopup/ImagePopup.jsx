import closeIcon from "../../images/CloseIcon.svg";

function ImagePopup({ card, onClose }) {
  const isOpen = Boolean(card);

  return (
    <div
      className={`imagepopup ${isOpen ? "imagepopup_opened" : ""}`}
      role="dialog"
      aria-hidden={!isOpen}
    >
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
        {card && (
          <>
            <img
              className="imagepopup__image"
              src={card.link}
              alt={card.name || "Imagem ampliada"}
            />
            <p className="imagepopup__title">{card.name}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default ImagePopup;
