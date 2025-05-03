import Popup from "../Popup/Popup";

function RemoveCard({ onClose, onConfirm }) {
  function handleSubmit(event) {
    event.preventDefault();
    onConfirm();
    onClose();
  }

  return (
    <div className="popupconfirmation__content">
      <form onSubmit={handleSubmit} className="popupconfirmation__form">
        <button type="submit" className="popupconfirmation__button">
          Sim
        </button>
      </form>
    </div>
  );
}

export default RemoveCard;
