/* попапы */
const popupProfileEdit = document.querySelector('.popup_type_edit-profile');
const popupCardAdd = document.querySelector('.popup_type_add-card');

/* открытие попапов */

const popupProfileEditOpenButton = document.querySelector('.profile__button-edit');
const popupCardAddOpenButton = document.querySelector('.profile__button-add');


/* закрытие попапов */

const popupProfileEditCloseButton = popupProfileEdit.querySelector('.popup__button-close');
const popupCardAddCloseButton = popupCardAdd.querySelector('.popup__button-close');

/* данные из profile */

const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');

/* элементы формы редактирования профиля */

const popupFormInputName = popupProfileEdit.querySelector('.popup__form-input_type_name');
const popupFormInputCaption = popupProfileEdit.querySelector('.popup__form-input_type_caption');
const popupProfileEditSubmitFormButton = popupProfileEdit.querySelector('.popup__form');
const popupCardAddSubmitFormButton = popupCardAdd.querySelector('.popup__form');


const cardsElement = document.querySelector('.cards');
const cardTemplateElement = document.querySelector('.card-template');

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

/* при загрузке страницы добавим карточки из массива initialCards*/

initialCards.forEach(function(card) {
  const cardElement = cardTemplateElement.content.cloneNode(true);
  cardElement.querySelector('.card__caption').textContent = card.name;
  cardElement.querySelector('.card__img').setAttribute('src', card.link);
  cardElement.querySelector('.card__img').setAttribute('alt', card.name);

  cardsElement.prepend(cardElement);
})

/* openPopup - функция открытия попапа и получения текстовых значений элементов */

function openPopup(popup) { 
  popup.classList.add('popup_is-opened');
}

/* closePopup - функция закрытия попапа */

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
}

/* submitFormPopup - функция отправки формы без перезагрузки страницы
так же функция позволяет изменить текстовое содержимое указанных элементов */

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

  closePopup(popupCardAdd);
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



