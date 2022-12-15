const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__form-input');

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', function (evt) {
  console.log(evt.target.validity);
});