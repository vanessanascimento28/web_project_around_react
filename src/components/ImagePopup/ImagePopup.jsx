import closeIcon from "../../images/CloseIcon.svg";

function ImagePopup() {
  return (
    <div className="imagepopup">
      <div className="imagepopup__overlay">
        <button className="imagepopup__close-button">
          <img
            className="imagepopup__close-icon"
            src={closeIcon}
            alt="duas retas cruzadas na diagonal formando a letra X"
          />
        </button>
        <img className="imagepopup__image" alt="" />
        <p className="imagepopup__title">Local Aqui</p>
      </div>
    </div>
  );
}

export default ImagePopup;
