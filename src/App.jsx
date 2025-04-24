import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Main/components/Popup/Popup";

function App() {
  const [user, setUser] = useState({ name: "Vanessa", about: "Web Developer" });
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);

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
    
  }

  function handleUpdateUserInfo(updatedUser) {
    setUser(updatedUser);
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
      />

      <Popup
        editProfile={""}
        handleEditUserPopup={handleEditUserPopup}
        handleUpdateUserInfo={handleUpdateUserInfo}
      />
      <Footer />
    </div>
  );
}

export default App;
