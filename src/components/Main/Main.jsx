import { useState, useContext } from "react";
import profileImage from "../../images/profileimage.jpg";
import editIcon from "../../images/IconeCanetaEditor.svg";
import buttonIcon from "../../images/IconeCanetaVector.svg";
import addButton from "../../images/IconeAddButton.svg";
import Card from "./components/Card/Card";
import NewCard from "./components/NewCard/NewCard";
import ImagePopup from "./components/ImagePopup/ImagePopup";
import EditProfile from "./components/EditProfile/EditProfile";
import EditAvatar from "./components/EditAvatar/EditAvatar";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Popup from "../Main/components/Popup/Popup";
import RemoveCard from "../Main/components/RemoveCard/RemoveCard";

function Main({
  handleDeleteCard,
  handleCardLike,
  cards,
  onAddPlaceSubmit,
  handleUpdateUserInfo,
  handleUpdateAvatar,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const hasCards = cards && cards.length > 0;

  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

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

  function handleOpenEditProfile() {
    handleOpenPopup({
      title: "Editar Perfil",
      children: (
        <EditProfile
          onClose={handleClosePopup}
          onUpdateUser={handleUpdateUserInfo}
        />
      ),
    });
  }

  function handleOpenEditAvatar() {
    handleOpenPopup({
      title: "Editar Avatar",
      children: (
        <EditAvatar
          onClose={handleClosePopup}
          onUpdateAvatar={handleUpdateAvatar}
        />
      ),
    });
  }

  function handleOpenNewCard() {
    handleOpenPopup({
      title: "Novo Lugar",
      children: (
        <NewCard
          onClose={handleClosePopup}
          onAddPlaceSubmit={onAddPlaceSubmit}
        />
      ),
    });
  }

  function handleOpenConfirmDelete(card) {
    setSelectedCard(card);
    handleOpenPopup({
      title: "Tem certeza?",
      customOverlayClass: "popupconfirmation__overlay",
      children: (
        <RemoveCard
          onConfirm={() => handleDeleteCard(card)}
          onClose={handleClosePopup}
        />
      ),
    });
  }

  return (
    <main className="content">
      <div className="content__profile">
        <div className="content__profile-wrapper">
          <img
            className="content__profile-image"
            src={currentUser.avatar || profileImage}
            alt="Imagem do perfil"
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
            <button className="content__button" onClick={handleOpenEditProfile}>
              <img
                className="content__button-icon"
                src={buttonIcon}
                alt="lápis branco"
              />
            </button>
          </div>
          <p className="content__text-description">{currentUser.about}</p>
        </div>
        <button className="content__addbutton" onClick={handleOpenNewCard}>
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
              handleDeleteCard={handleOpenConfirmDelete}
              handleCardLike={handleCardLike}
              onCardClick={handleCardClick}
            />
          ))}
        </ul>
      )}

      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          customOverlayClass={popup.customOverlayClass} 
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
