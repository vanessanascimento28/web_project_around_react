import { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Popup from "./Popup/Popup";
import EditAvatar from "./EditAvatar/EditAvatar";
import EditProfile from "./EditProfile/EditProfile";

function App() {
  const [user, setUser] = useState({ name: "Vanessa", about: "Web Developer" });
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);

  const [cards, setCards] = useState([
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ]);

  function handleOpenAddCard() {
    setIsAddCardOpen(true);
  }

  function handleCloseAddCard() {
    setIsAddCardOpen(false);
  }

  function handleDeleteCard(card) {
    const filteredCards = cards.filter((c) => c._id !== card._id);
    setCards(filteredCards);
  }

  function handleEditUserPopup() {
    setIsEditProfileOpen((prev) => !prev);
  }

  function handleUpdateUserInfo(updatedUser) {
    setUser(updatedUser);
  }

  function handleOpenEditAvatar() {
    console.log("Abriu o popup de avatar");
    setIsEditAvatarOpen(true);
  }

  function handleCloseEditAvatar() {
    setIsEditAvatarOpen(false);
  }

  return (
    <div className="page__content">
      <Header />

      <Main
        cards={cards}
        user={user}
        handleEditUserPopup={handleEditUserPopup}
        handleDeleteCard={handleDeleteCard}
        handleOpenAddCard={handleOpenAddCard}
        handleCloseAddCard={handleCloseAddCard}
        isAddCardOpen={isAddCardOpen}
        handleOpenEditAvatar={handleOpenEditAvatar}
      />

      <EditProfile
        isOpen={isEditProfileOpen}
        onClose={handleEditUserPopup}
        onUpdateUser={handleUpdateUserInfo}
      />
      <EditAvatar isOpen={isEditAvatarOpen} onClose={handleCloseEditAvatar} />
      <Footer />
    </div>
  );
}

export default App;
