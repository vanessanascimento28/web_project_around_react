import profileImage from "../../images/profileimage.jpg";
import editIcon from "../../images/IconeCanetaEditor.svg";
import buttonIcon from "../../images/IconeCanetaVector.svg";
import addButton from "../../images/IconeAddButton.svg";
import Card from "../Card/Card";
import NewCard from "../NewCard/NewCard";

function Main({
  cards = [],
  user,
  handleEditUserPopup,
  handleDeleteCard,
  handleOpenAddCard,
  handleCloseAddCard,
  isAddCardOpen,
  handleOpenEditAvatar,
}) {
  const hasCards = Boolean(cards.length);

  return (
    <main className="content">
      <div className="content__profile">
        <div className="content__profile-wrapper">
          <img
            className="content__profile-image"
            src={profileImage}
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
            <h1 className="content__text-name">{user.name}</h1>
            <button className="content__button" onClick={handleEditUserPopup}>
              <img
                className="content__button-icon"
                src={buttonIcon}
                alt="lápis branco"
              />
            </button>
          </div>
          <p className="content__text-description">{user.about}</p>
        </div>
        <button className="content__addbutton" onClick={handleOpenAddCard}>
          <img
            className="content__addbutton-icon"
            src={addButton}
            alt="sinal de mais"
          />
        </button>
        <NewCard isOpen={isAddCardOpen} onClose={handleCloseAddCard} />
      </div>

      {hasCards ? (
        <ul className="cards-list">
          {cards.map((card, index) => (
            <Card key={index} card={card} handleDeleteCard={handleDeleteCard} />
          ))}
        </ul>
      ) : null}
    </main>
  );
}

export default Main;
