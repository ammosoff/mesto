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
const popupViewPictureImg = popupViewPicture.querySelector('.popup__img');  /* попап с картинкой открывается приклике на картинку */
const popupViewPictureCaption = popupViewPicture.querySelector('.popup__caption'); /* элемент подписи к картинке */

/* элементы закрытия попапов */
const popupProfileEditCloseButton = popupProfileEdit.querySelector('.popup__button-close');
const popupCardAddCloseButton = popupCardAdd.querySelector('.popup__button-close');
const popupViewPictureCloseButton = popupViewPicture.querySelector('.popup__button-close');

/* элементы форм попапов */
const popupProfileEditSubmitFormButton = popupProfileEdit.querySelector('.popup__form');
const popupCardAddSubmitFormButton = popupCardAdd.querySelector('.popup__form');

/* элементы инпутов форм попапов */
const popupFormInputName = popupProfileEdit.querySelector('.popup__form-input_type_name');
const popupFormInputCaption = popupProfileEdit.querySelector('.popup__form-input_type_caption');
const popupFormInputTitle = popupCardAdd.querySelector('.popup__form-input_type_title');
const popupFormInputLink = popupCardAdd.querySelector('.popup__form-input_type_link')

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

/* handleViewCard - функция получает данные картинки по которой кликнули и вызывает функцию открытия попапа */

function handleViewCard(evt) {
  popupViewPictureImg.src = evt.target.src;
  popupViewPictureImg.alt = evt.target.closest('.card').querySelector('.card__caption').textContent;
  popupViewPictureCaption.textContent = evt.target.closest('.card').querySelector('.card__caption').textContent;
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

  imgCard.addEventListener('click', handleViewCard);

  return newCard;
}

/* renderCard - функция добавляет карточку в верстку */

function renderCard (dataCard) {
  cardsContainer.prepend(createCard(dataCard));
}

/* submitFormPopupEditProfile - функция получает данные формы редактирования профиля, отображает их в верстке и закрывает попап*/

function submitFormPopupEditProfile(evt) {
  evt.preventDefault();

  profileName.textContent = popupFormInputName.value;
  profileCaption.textContent = popupFormInputCaption.value;

  closePopup(popupProfileEdit);
}

/* submitFormPopupCardAdd - функция получает данные формы добавления новой карточки, передает их функции добавления карточки 
и закрывает попап. В конце очищает поля формы чтобы они не отображались при следующем открытии формы */

function submitFormPopupCardAdd(evt) {
  evt.preventDefault();
  initialCards.name = popupFormInputTitle.value;
  initialCards.link = popupFormInputLink.value;

  renderCard(initialCards);
  closePopup(popupCardAdd);
  popupFormInputTitle.value = '';
  popupFormInputLink.value = '';
}

/* проходим по каждому элементу массива initialCards и передаем его в функцию  renderCard */

initialCards.forEach(function(dataCard) {
  renderCard(dataCard);
})




/* ОБРАБОТКА СОБЫТИЙ */




/* при клике на кнопку редактирования профиля получаем в поля формы свойства textConten указанных элементов и вызываем функцию открытия попапа */
popupProfileEditOpenButton.addEventListener('click', function () { 
  popupFormInputName.value = profileName.textContent;
  popupFormInputCaption.value = profileCaption.textContent;
  openPopup(popupProfileEdit);
});

/* при клике на кнопку добавления новой карточки вызываем функцию открытия попапа */
popupCardAddOpenButton.addEventListener('click', function () {
    openPopup(popupCardAdd);
  });
  
/* закрываем попап редактирования профиля */
popupProfileEditCloseButton.addEventListener('click', function () {
  closePopup(popupProfileEdit);
});

/* закрываем попап добавления новой карточки */
popupCardAddCloseButton.addEventListener('click', function () {
  closePopup(popupCardAdd);
});

/* закрываем попап просмотра изображения */
popupViewPictureCloseButton.addEventListener('click', function () {
  closePopup(popupViewPicture);
});

/* обрабатываем событие отправки формы редактирования профиля*/
popupProfileEditSubmitFormButton.addEventListener('submit', submitFormPopupEditProfile);

/* обрабатываем событие отправки формы добавления карточки */
popupCardAddSubmitFormButton.addEventListener('submit', submitFormPopupCardAdd);



