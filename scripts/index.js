/* ВЫБОРКА DOM-ЭЛЕМЕНТОВ */

/* элементы для добавления новой карточки */
const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card-template').content;

/* попапы */
const popupProfileEdit = document.querySelector('.popup_type_edit-profile');
const popupCardAdd = document.querySelector('.popup_type_add-card');
const popupViewPicture = document.querySelector('.popup_type_view-picture');

/* элементы открытия попапов */
const popupProfileEditOpenButton = document.querySelector('.profile__button-edit');
const popupCardAddOpenButton = document.querySelector('.profile__button-add');

/* элемент закрытия попапов */
const popupCloseButton = document.querySelectorAll('.popup__button-close');

/* элементы форм */
const popupProfileEditForm = document.forms["profile-form"];
const popupCardAddForm = document.forms["card-form"];

/* элементы инпутов форм  */
const popupFormInputName = popupProfileEdit.querySelector('.popup__form-input_type_name');
const popupFormInputCaption = popupProfileEdit.querySelector('.popup__form-input_type_caption');
const popupFormInputTitle = popupCardAdd.querySelector('.popup__form-input_type_title');
const popupFormInputLink = popupCardAdd.querySelector('.popup__form-input_type_link');

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

function openPopup(popup) { 
  popup.classList.add('popup_is-opened');
}

/* closePopup - функция закрытия попапа */

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
}

/* handleViewCard - функция открытия попапа с картинкой */

function handleViewCard(dataCard) {
  popupViewPictureImg.src = dataCard.link;
  popupViewPictureImg.alt = dataCard.name;
  popupViewPictureCaption.textContent = dataCard.name;

  openPopup(popupViewPicture);
}

/* handleLikeCard - функция лайка карточки */

function handleLikeCard(evt) {
  evt.target.classList.toggle('card__button-like_active');
}

/* handleDeleteCard - функция удаления карточки */

function handleDeleteCard(evt) {
  evt.target.closest('.card').remove();
}

/* createCard - функция создания новой карточки */

function createCard(dataCard) {
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

/* renderCard - функция добавляет карточку в верстку */

function renderCard (dataCard) {
  cardsContainer.prepend(createCard(dataCard));
}

/* handleFormSubmitEditProfile - в этой функции получаем данные формы редактирования профиля, отображаем их в верстке и закрываем попап*/

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();

  profileName.textContent = popupFormInputName.value;
  profileCaption.textContent = popupFormInputCaption.value;

  closePopup(popupProfileEdit);
}

/* handleFormSubmitCardAdd - в этой функции получаем данные формы добавления новой карточки, передаем их функции добавления карточки 
и закрываем попап. В конце очищаем поля формы чтобы они не отображались при следующем открытии формы */

function handleFormSubmitCardAdd(evt) {
  evt.preventDefault();

  initialCards.name = popupFormInputTitle.value;
  initialCards.link = popupFormInputLink.value;

  renderCard(initialCards);
  closePopup(popupCardAdd);

  evt.target.reset(); // очищаем форму
}

/* проходим по каждому элементу массива initialCards и передаем его в функцию  renderCard */

initialCards.forEach(renderCard);




/* ОБРАБОТКА СОБЫТИЙ */




/* при клике на кнопку редактирования профиля получаем в поля формы свойства textConten указанных элементов и вызываем функцию открытия попапа */
popupProfileEditOpenButton.addEventListener('click', () => { 
  popupFormInputName.value = profileName.textContent;
  popupFormInputCaption.value = profileCaption.textContent;
  openPopup(popupProfileEdit);
});

/* при клике на кнопку добавления новой карточки вызываем функцию открытия попапа */
popupCardAddOpenButton.addEventListener('click', () => {
    openPopup(popupCardAdd);
  });
  
/* закрытие попапов на крестик */
popupCloseButton.forEach((button) => {
  const popup = button.closest('.popup');   // находим 1 раз ближайший к крестику попап 

  button.addEventListener('click', () => closePopup(popup));   // устанавливаем обработчик закрытия на крестик
});

/* обрабатываем событие отправки формы редактирования профиля*/
popupProfileEditForm.addEventListener('submit', handleFormSubmitEditProfile);

/* обрабатываем событие отправки формы добавления карточки */
popupCardAddForm.addEventListener('submit', handleFormSubmitCardAdd);



