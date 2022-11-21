const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
const popupSubmitFormButtonElement = popupElement.querySelector('.popup__form');
const popupFormInputNameElement = popupElement.querySelector('.popup__form-input_type_name');
const popupFormInputCaptionElement = popupElement.querySelector('.popup__form-input_type_caption');
const profileNameElement = document.querySelector('.profile__name');
const profileCaptionElement = document.querySelector('.profile__caption');

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



