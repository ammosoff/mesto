const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__form-input');
const formError = formElement.querySelector(`.${formInput.id}-error`);


/* показывает элемент ошибки */
const showInputError = (input, errorMessage) => {
  input.classList.add('popup__form-input_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('popup__form-input-error_active');
};

/* скрывает элемент ошибки */
const hideInputError = (input) => {
  input.classList.remove('popup__form-input_type_error');
  formError.classList.remove('popup__form-input-error_active');
  formError.textContent = '';
};

/* проверяет валидность поля, внутри вызывает showInputError или hideInputError */
const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showInputError(formInput, formInput.validationMessage);
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
