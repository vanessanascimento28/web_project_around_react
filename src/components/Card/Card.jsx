import trashIcon from "../../images/Trash.svg";
import infoIcon from "../../images/Vectorheart.svg";

function Card({ card, handleDeleteCard }) {
  function deleteCard() {
    handleDeleteCard(card);
  }

  return (
    <li className="card__content">
      <img className="card__image" src={card.link} alt={card.name} />
      <img
        className="card__trash-icon"
        src={trashIcon}
        alt="ícone de lixeira"
        onClick={deleteCard}
      />
      <div className="card__info">
        <p className="card__info-title">{card.name}</p>
        <img
          className="card__info-icon"
          src={infoIcon}
          alt="coração vazado com borda preta"
        />
      </div>
    </li>
  );
}

export default Card;
