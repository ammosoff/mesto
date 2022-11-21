const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
/* const popupSaveButtonElement = popupElement.querySelector('.popup__button-save'); */

/* Создаем функции для открытия и закрытия попапа */

const openPopup = function() { 
  popupElement.classList.add('popup_is-opened');
}

const closePopup = function() {
  popupElement.classList.remove('popup_is-opened');
}

/* Вызов функций по открытию и закрытию попапа */

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);