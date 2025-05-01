import { useContext } from "react";
import trashIcon from "../../images/Trash.svg";
import infoIcon from "../../images/Vectorheart.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Card({ card, handleDeleteCard, handleCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner && card.owner._id === currentUser._id;

  const isLiked = Array.isArray(card.likes) && card.likes.some((user) => user._id === currentUser._id);

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

  function deleteCard() {
    handleDeleteCard(card);
  }

  function toggleLike() {
    handleCardLike(card);
  }

  return (
    <li className="card__content">
      <img className="card__image" src={card.link} alt={card.name} />
      {isOwn && (
        <img
          className="card__trash-icon"
          src={trashIcon}
          alt="ícone de lixeira"
          onClick={deleteCard}
        />
      )}
      <div className="card__info">
        <p className="card__info-title">{card.name}</p>
        <button className={cardLikeButtonClassName} onClick={toggleLike}>
          <img
            className="card__info-icon"
            src={infoIcon}
            alt="ícone de curtir"
          />
        </button>
      </div>
    </li>
  );
}

export default Card;
