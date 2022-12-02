const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
const popupSubmitFormButtonElement = popupElement.querySelector('.popup__form');
const popupFormInputNameElement = popupElement.querySelector('.popup__form-input_type_name');
const popupFormInputCaptionElement = popupElement.querySelector('.popup__form-input_type_caption');
const profileNameElement = document.querySelector('.profile__name');
const profileCaptionElement = document.querySelector('.profile__caption');
const cardsElement = document.querySelector('.cards');
const cardTemplateElement = document.querySelector('.card-template').content;

/* initialCards - массив с объектами с информацией для первых 6 карточек на странице  */

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

/* при загрузке страницы добавятся карточки */

initialCards.forEach(function(card) {
  const cardElement = cardTemplateElement.cloneNode(true);
  cardElement.querySelector('.card__caption').textContent = card.name;
  cardElement.querySelector('.card__img').setAttribute('src', card.link);
  cardElement.querySelector('.card__img').setAttribute('alt', card.name);

  cardsElement.prepend(cardElement);
})

/* openPopup - функция открытия попапа и получения текстовых значений элементов */

function openPopup() { 
  popupElement.classList.add('popup_is-opened');
  popupFormInputNameElement.value = profileNameElement.textContent;
  popupFormInputCaptionElement.value = profileCaptionElement.textContent;
}

/* closePopup - функция закрытия попапа */

function closePopup() {
  popupElement.classList.remove('popup_is-opened');
}

/* submitFormPopup - функция отправки формы без перезагрузки страницы
так же функция позволяет изменить текстовое содержимое указанных элементов */

function submitFormPopup(evt) {
  evt.preventDefault();

  profileNameElement.textContent = popupFormInputNameElement.value;
  profileCaptionElement.textContent = popupFormInputCaptionElement.value;

  closePopup();
}

/* Вызов функций */

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupSubmitFormButtonElement.addEventListener('submit', submitFormPopup);



