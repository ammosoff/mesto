/* попапы */
const popupProfileEdit = document.querySelector('.popup_type_edit-profile');
const popupCardAdd = document.querySelector('.popup_type_add-card');
const popupProfileEditOpenButton = document.querySelector('.profile__button-edit');
const popupCardAddOpenButton = document.querySelector('.profile__button-add');
const popupProfileEditCloseButton = popupProfileEdit.querySelector('.popup__button-close');
const popupCardAddCloseButton = popupCardAdd.querySelector('.popup__button-close');
/* данные из profile */
const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');
/* элементы формы редактирования профиля */
const popupFormInputName = popupProfileEdit.querySelector('.popup__form-input_type_name');
const popupFormInputCaption = popupProfileEdit.querySelector('.popup__form-input_type_caption');
const popupFormInputTitle = popupCardAdd.querySelector('.popup__form-input_type_title');
const popupFormInputLink = popupCardAdd.querySelector('.popup__form-input_type_link')
const popupProfileEditSubmitFormButton = popupProfileEdit.querySelector('.popup__form');
const popupCardAddSubmitFormButton = popupCardAdd.querySelector('.popup__form');
/* элементы для добавления новой карточки */
const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card-template').content;

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

/* openPopup - функция открытия попапа */

function openPopup(popup) { 
  popup.classList.add('popup_is-opened');
}

/* closePopup - функция закрытия попапа */

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
}

/* handleLikeCard - функция лайка карточки */

function handleLikeCard(evt) {
  evt.target.classList.toggle('card__button-like_active');
}

/* функция удаления карточки */


/* addCard - функция создания новой карточки */

function addCard(dataCard) {
  const newCard = cardTemplate.cloneNode(true);

  const nameCard = newCard.querySelector('.card__caption');
  const imgCard = newCard.querySelector('.card__img');
  nameCard.textContent = dataCard.name;
  imgCard.src = dataCard.link;

  const cardleLikeButton = newCard.querySelector('.card__button-like');
  cardleLikeButton.addEventListener('click', handleLikeCard)

  return newCard;
}


/* renderCard - функция добавляет новую карточку в верстку */
function renderCard (dataCard) {
  cardsContainer.prepend(addCard(dataCard));
}

/* проходим по каждому элементу массива initialCards и передаем его в функцию  renderCard */

initialCards.forEach(function(dataCard) {
  renderCard(dataCard);
})


/* Обработка сабмита формы редактирования профиля */

function submitFormPopupEditProfile(evt) {
  evt.preventDefault();

  profileName.textContent = popupFormInputName.value;
  profileCaption.textContent = popupFormInputCaption.value;

  closePopup(popupProfileEdit);
}

/* Обработка сабмита формы добавления карточки */

function submitFormPopupCardAdd(evt) {
  evt.preventDefault();
  initialCards.name = popupFormInputTitle.value;
  initialCards.link = popupFormInputLink.value;

  renderCard(initialCards);
  closePopup(popupCardAdd);
  popupFormInputTitle.value = '';
  popupFormInputLink.value = '';
}


/* Обработка событий */

popupProfileEditOpenButton.addEventListener('click', function () {
  popupFormInputName.value = profileName.textContent;
  popupFormInputCaption.value = profileCaption.textContent;
  openPopup(popupProfileEdit);
});

popupCardAddOpenButton.addEventListener('click', function () {
    openPopup(popupCardAdd);
  });
  

popupProfileEditCloseButton.addEventListener('click', function () {
  closePopup(popupProfileEdit);
});

popupCardAddCloseButton.addEventListener('click', function () {
  closePopup(popupCardAdd);
});

popupProfileEditSubmitFormButton.addEventListener('submit', submitFormPopupEditProfile);
popupCardAddSubmitFormButton.addEventListener('submit', submitFormPopupCardAdd);



