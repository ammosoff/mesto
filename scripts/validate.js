const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__form-input');


/* показывает элемент ошибки */
const showInputError = (input) => {
  input.classList.add('popup__form-input_type_error');
};

/* скрывает элемент ошибки */
const hideInputError = (input) => {
  input.classList.remove('popup__form-input_type_error');
};

/* проверяет валидность поля, внутри вызывает showInputError или hideInputError */
const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showInputError(formInput);
  } else {
    hideInputError(formInput);
  }
};

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', function () {
  checkInputValidity();
});
