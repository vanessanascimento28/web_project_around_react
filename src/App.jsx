import { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./utils/Api";
import Popup from "./components/Main/components/Popup/Popup";

function App() {
  const [cards, setCards] = useState([]);
  const [editProfile, setEditProfile] = useState('');
  const [user, setUser] = useState({ name: "Vanessa", about: "Web Developer" });
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);

  useEffect (()=>{
    handleGetCards();
    handleGetUserInfo();
  }, [])

  async function handleGetCards(){

try {
  const response = await api.getInitialCards();
  const cardsData = await response.json()
  setCards(cardsData);
} catch (error) {
console.error("Erro ao buscar os cards:", error);
}
  }

  async function handleGetUserInfo() {
    try {
      const userData = await api.getUserInfo();
      setUser(userData);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  }

  async function handleCreateCard(card){
    try {
      const response = await api.createCard(
          {
            "isLiked": false,
            "_id": "67e5d558194122001a541859",
            "name": card.title,
            "link": card.link,
            "owner": "41661518c704cfd7129ae9e9",
            "createdAt": "2025-03-27T22:46:48.008Z"
          }
        )
      if (response.status !== 201){
        throw new Error ("Erro na criação de Card");
      }
      const createdCard = await response.json()
      setCards([...cards, createdCard]);
    } catch (error) {
    console.error(error);
    }
      }

      function handleOpenAddCard() {
        setIsAddCardOpen(true);
      }
    
      function handleCloseAddCard() {
        setIsAddCardOpen(false);
      }

      async function handleUpdateUserInfo(updatedUser) {
        try {
          const response = await api.updateUser(updatedUser);
          if (response.status !== 200) {
            throw new Error("Erro na atualização de usuário");
          }
    
          
          const newUserData = await response.json();
          setUser(newUserData);
    
        } catch (error) {
          console.error("Erro ao atualizar dados do usuário:", error);
        }
      }

  async function handleDeleteCard(card){
    if(card.owner !== ownerI) {
      showToast ("Você não é dono deste cartão!")
      return
    }
        try {
          const response = await api.deleteCard(card.id)
          if (response.status !== 204) {
            throw new Error("Erro no delete card");
          }
          showToast ("Cartão Deletado")
          setCards(cards.filter((c)=> c.id !== card.id));
        } catch (error) {
        console.error(error);
        }
          }

function handleEditUserPopup(){
  setEditProfile((prev) => (prev === '' ? 'popup__active' : ''));
}

  return (
    <>
    <div className="page__content">

<Header />

<Main 
cards={cards} 
user={user} 
handleEditUserPopup={handleEditUserPopup}
handleCreateCard={handleCreateCard} 
handleDeleteCard={handleDeleteCard}
handleOpenAddCard={handleOpenAddCard}
handleCloseAddCard={handleCloseAddCard}
isAddCardOpen={isAddCardOpen}
/>

<Popup editProfile={editProfile} handleEditUserPopup={handleEditUserPopup}
handleUpdateUserInfo={handleUpdateUserInfo} />
<Footer />

    <template id="card-template">
      
    </template>
  </div>
    </>
   
  )
}

export default App;
