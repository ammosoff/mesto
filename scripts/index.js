/* ВЫБОРКА DOM-ЭЛЕМЕНТОВ */

/* элементы для добавления новой карточки */
const cardsContainer = document.querySelector('.cards');
const cardTemplate = cardsContainer.querySelector('#card-template').content;

/* попапы */
const popupList = document.querySelectorAll('.popup');
const popupProfileEdit = document.querySelector('.popup_type_edit-profile');
const popupCardAdd = document.querySelector('.popup_type_add-card');
const popupViewPicture = document.querySelector('.popup_type_view-picture');

/* элементы открытия попапов */
const popupProfileEditButton = document.querySelector('.profile__button-edit');
const popupCardAddButton = document.querySelector('.profile__button-add');

/* элементы кнопок закрытия попапов  */
const popupCloseButtonList = document.querySelectorAll('.popup__button-close');

/* элементы форм */
const popupProfileEditForm = document.forms["profile-form"];
const popupCardAddForm = document.forms["card-form"];
const popupFormInputName = popupProfileEditForm.elements.name;
const popupFormInputCaption = popupProfileEditForm.elements.caption;
const popupFormInputTitle = popupCardAddForm.elements.title;
const popupFormInputLink = popupCardAddForm.elements.link;

/* элементы попапа с картинкой */
const popupViewPictureImg = popupViewPicture.querySelector('.popup__img');
const popupViewPictureCaption = popupViewPicture.querySelector('.popup__caption');

/* элементы из блока profile */
const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');




/* initialCards - массив объектов с информацией для добавления первых 6 карточек на странице  */

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];




/* ФУНКЦИ */




/* openPopup - функция открытия попапа */
const openPopup = (popup) => { 
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleClosePopupByEsc);
}

/* closePopup - функция закрытия попапа */
const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleClosePopupByEsc);
}

/* handleViewCard - функция открытия попапа с картинкой */
const handleViewCard = (dataCard) => {
  popupViewPictureImg.src = dataCard.link;
  popupViewPictureImg.alt = dataCard.name;
  popupViewPictureCaption.textContent = dataCard.name;

  openPopup(popupViewPicture);
}

/* handleLikeCard - функция лайка карточки */
const handleLikeCard = (evt) => {
  evt.target.classList.toggle('card__button-like_active');
}

/* handleDeleteCard - функция удаления карточки */
const handleDeleteCard = (evt) => {
  evt.target.closest('.card').remove();
}

/* createCard - функция создания новой карточки */
const createCard = (dataCard) => {
  const newCard = cardTemplate.cloneNode(true);
  const nameCard = newCard.querySelector('.card__caption');
  const imgCard = newCard.querySelector('.card__img');
  nameCard.textContent = dataCard.name;
  imgCard.src = dataCard.link;
  imgCard.alt = dataCard.name;

  const cardleLikeButton = newCard.querySelector('.card__button-like');
  cardleLikeButton.addEventListener('click', handleLikeCard);

  const cardDeleteButton = newCard.querySelector('.card__button-delete');
  cardDeleteButton.addEventListener('click', handleDeleteCard);

  imgCard.addEventListener('click', () => handleViewCard(dataCard));

  return newCard;
}

/* renderCard - функция добавления карточку в верстку */
const renderCard = (dataCard) => {
  cardsContainer.prepend(createCard(dataCard));
}

/* В этой функции получаем данные формы редактирования профиля, отображаем их в верстке и закрываем попап*/
const handleFormSubmitEditProfile = (evt) => {
  evt.preventDefault();

  profileName.textContent = popupFormInputName.value;
  profileCaption.textContent = popupFormInputCaption.value;

  closePopup(popupProfileEdit);
}

/* отключение кнопки отправки формы */
const disableButtonSubmitForm = (buttonElement) => {
  buttonElement.classList.add('popup__button-save_disabled');
  buttonElement.disabled = true;
}

/* Закрытие попапа нажатием на Esc */
const handleClosePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_is-opened');
    closePopup(popup);
  } 
}

/* Закрытие попапа нажатием кнопки мыши на оверлей */
const handleClosePopupByOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  } 
}

/* обработчик сабмита формы добавления новой карточки */
const handleFormSubmitCardAdd = (evt) => {
  evt.preventDefault();

  initialCards.name = popupFormInputTitle.value;
  initialCards.link = popupFormInputLink.value;

  renderCard(initialCards);
  closePopup(popupCardAdd);

  evt.target.reset(); // очищаем форму
  disableButtonSubmitForm(evt.submitter); // делаем неактивной кнопку сабмита формы для предотвращения добавления пустой карточки после повторного открытия формы
}

/* проходим по каждому элементу массива initialCards и передаем его в функцию  renderCard */
initialCards.forEach(renderCard);




/* ОБРАБОТКА СОБЫТИЙ */




/* при клике на кнопку редактирования профиля получаем в поля формы свойства textConten указанных элементов и вызываем функцию открытия попапа */
popupProfileEditButton.addEventListener('click', () => { 
  popupFormInputName.value = profileName.textContent;
  popupFormInputCaption.value = profileCaption.textContent;
  openPopup(popupProfileEdit);
});

/* при клике на кнопку добавления новой карточки вызываем функцию открытия попапа */
popupCardAddButton.addEventListener('click', () => {
    openPopup(popupCardAdd);
  });
  
/* закрытие попапов на крестик */
popupCloseButtonList.forEach((button) => {
  const popup = button.closest('.popup');   // находим 1 раз ближайший к крестику попап 

  button.addEventListener('click', () => closePopup(popup));   // устанавливаем обработчик закрытия на крестик
});

/* на каждый попап вешаем случашатель чтобы закрывать попап нажатием кнопки мыши на оверлей */
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', handleClosePopupByOverlay);
})

/* обрабатываем событие отправки формы редактирования профиля*/
popupProfileEditForm.addEventListener('submit', handleFormSubmitEditProfile);

/* обрабатываем событие отправки формы добавления карточки */
popupCardAddForm.addEventListener('submit', handleFormSubmitCardAdd);



