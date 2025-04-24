import {useState} from "react";
import closeIcon from "../../../../images/CloseIcon.svg"

function Popup({editProfile, handleEditUserPopup, handleUpdateUserInfo}) {
 
  const [name, setName] = useState ("");
  const [about, setAbout] = useState ("");

  function updateUserInfo (event){

event.preventDefault()
const data = new FormData(event.target)
const user = {name: data.get("name"), about: data.get("about")}
handleUpdateUserInfo(user)
setName("")
setAbout("")
handleEditUserPopup()
  }

  return (
    <>
      <div className={`popup ${editProfile}`}>
        <div className="popup__overlay">
          <button className="popup__close-button" onClick={handleEditUserPopup}>
            <img
              className="popup__icon"
              src={closeIcon}
              alt="duas retas cruzadas na diagonal formando a letra X"
            />
          </button>
          <h3 className="popup__title">Editar Perfil</h3>
          <form onSubmit={updateUserInfo} id="user-form" className="popup__form" name="popup-form" required>
            <div className="popup__target">
              <input
                id="name"
                name="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required
                maxLength="40"
                minLength="2"
                className="popup__input popup__input-error"
                type="text"
                placeholder="Nome"
              />
              <span className="error__message" id="name-error"></span>
            </div>
            <div className="popup__target">
              <input
                id="about"
                name="about"
                value={about}
                onChange={(e)=> setAbout(e.target.value)}
                required
                maxLength="200"
                minLength="2"
                className="popup__input popup__input-error"
                type="text"
                placeholder="Sobre mim"
              />
              <span className="error__message" id="about-error"></span>
            </div>
            <button
              className="popup__save-button error__button"
              type="submit"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>


      {/* ------------------------------------- POPUP CONFIRMATION DELETE ------------------------ */}

      <div className="popupconfirmation">
        <div className="popupconfirmation__overlay">
          <button className="popupconfirmation__close-button">
            <img
              className="popupconfirmation__icon"
              src={closeIcon}
              alt="duas retas cruzadas na diagonal formando a letra X"
            />
          </button>
          <div className="popupconfirmation__content">
            <h4 className="popupconfirmation__title">Tem certeza?</h4>
            <button className="popupconfirmation__button" type="submit">Sim</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
