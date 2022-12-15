const form = document.querySelector('.popup__form');
const formInput = form.querySelector('.popup__form-input');
const formError = form.querySelector(`.${formInput.id}-error`);


/* показывает элемент ошибки */
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__form-input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__form-input-error_active');
};

/* скрывает элемент ошибки */
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__form-input_type_error');
  errorElement.classList.remove('popup__form-input-error_active');
  errorElement.textContent = '';
};

/* проверяет валидность поля, внутри вызывает showInputError или hideInputError */
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

/* Принимает параметром элемент формы и добавляет ее полям нужные обработчики */
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__form-input'));

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
    })
  })
}

setEventListeners(form);

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', function () {
  checkInputValidity(form, formInput);
});
