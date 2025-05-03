import { useState, useContext } from "react";
import profileImage from "../../images/profileimage.jpg";
import editIcon from "../../images/IconeCanetaEditor.svg";
import buttonIcon from "../../images/IconeCanetaVector.svg";
import addButton from "../../images/IconeAddButton.svg";
import Card from "./components/Card/Card";
import NewCard from "./components/NewCard/NewCard";
import ImagePopup from "./components/ImagePopup/ImagePopup";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Popup from "../Main/components/Popup/Popup";

function Main({
  handleEditUserPopup,
  handleOpenEditAvatar,
  handleDeleteCard,
  handleCardLike,
  cards,
  onAddPlaceSubmit,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const hasCards = cards && cards.length > 0;

  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const newCardPopup = {
    title: "Novo Lugar",
    children: (
      <NewCard
        onClose={handleClosePopup}
        onAddPlaceSubmit={onAddPlaceSubmit}
      />
    ),
  };

  function handleOpenPopup(popupContent) {
    setPopup(popupContent);
  }

  function handleClosePopup() {
    setPopup(null);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    handleOpenPopup({
      title: card.name,
      children: <ImagePopup card={card} onClose={handleClosePopup} />,
    });
  }

  return (
    <main className="content">
      <div className="content__profile">
        <div className="content__profile-wrapper">
          <img
            className="content__profile-image"
            src={currentUser.avatar || profileImage}
            alt="Senhor de cabelos brancos sorrindo, ele veste um gorro vermelho e camiseta azul, ao fundo é possível ver o mar levemente desfocado"
          />
          <button className="content__editbtn" onClick={handleOpenEditAvatar}>
            <img
              className="content__edit-icon"
              src={editIcon}
              alt="ícone de edição"
            />
          </button>
        </div>
        <div className="content__text">
          <div className="content__text-square">
            <h1 className="content__text-name">{currentUser.name}</h1>
            <button className="content__button" onClick={handleEditUserPopup}>
              <img
                className="content__button-icon"
                src={buttonIcon}
                alt="lápis branco"
              />
            </button>
          </div>
          <p className="content__text-description">{currentUser.about}</p>
        </div>
        <button
          className="content__addbutton"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img
            className="content__addbutton-icon"
            src={addButton}
            alt="sinal de mais"
          />
        </button>
      </div>

      {hasCards && (
        <ul className="cards-list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleDeleteCard={handleDeleteCard}
              handleCardLike={handleCardLike}
              onCardClick={handleCardClick}
            />
          ))}
        </ul>
      )}

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
