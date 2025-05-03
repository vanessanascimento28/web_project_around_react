import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ConfirmDeletePopup from "./Main/components/RemoveCard/RemoveCard";
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/api";

function App() {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "Vanessa",
    about: "Web Developer",
  });
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error("Erro ao buscar cartões:", err);
      });
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => setCurrentUser(data))
      .catch((err) => console.error("Erro ao buscar usuário:", err));
  }, []);

  function handleUpdateUserInfo(updatedUser) {
    api
      .updateUser({
        name: updatedUser.name,
        about: updatedUser.about,
      })
      .then((newUserData) => {
        setCurrentUser(newUserData);
      })
      .catch((err) => console.error("Erro ao atualizar usuário:", err));
  }

  function handleAddPlaceSubmit(cardData) {
    api
      .createCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => console.error("Erro ao adicionar novo cartão:", err));
  }

  function handleUpdateAvatar(avatarUrl) {
    return api
      .setUserAvatar(avatarUrl)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .catch((err) => console.error("Erro ao atualizar avatar:", err));
  }

  function handleCardLike(card) {
    const request = card.isLiked
      ? api.removeLike(card._id)
      : api.updateLike(card._id);

    request
      .then((updatedCard) => {
        if (!updatedCard) {
          throw new Error("Resposta inválida da API ao atualizar curtida.");
        }

        setCards((prev) =>
          prev.map((c) => (c._id === card._id ? updatedCard : c))
        );
      })
      .catch((err) => console.error("Erro ao atualizar like:", err));
  }

  function handleTrashClick(card) {
    setCardToDelete(card);
    setIsConfirmPopupOpen(true);
  }

  function handleConfirmDelete() {
    if (!cardToDelete) return;

    api
      .deleteCard(cardToDelete._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== cardToDelete._id));
        setIsConfirmPopupOpen(false);
        setCardToDelete(null);
      })
      .catch((err) => console.error("Erro ao deletar card:", err));
  }

  function handleCloseConfirmPopup() {
    setIsConfirmPopupOpen(false);
    setCardToDelete(null);
  }

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUserInfo, handleUpdateAvatar }}
    >
      <div className="page__content">
        <Header />

        <Main
          cards={cards}
          onAddPlaceSubmit={handleAddPlaceSubmit}
          handleDeleteCard={handleTrashClick}
          handleCardLike={handleCardLike}
          handleUpdateUserInfo={handleUpdateUserInfo}
          handleUpdateAvatar={handleUpdateAvatar}
        />

        <ConfirmDeletePopup
          isOpen={isConfirmPopupOpen}
          onClose={handleCloseConfirmPopup}
          onConfirm={handleConfirmDelete}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
