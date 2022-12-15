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
    });
  });
};

/* Добавление обработчиков всем формам. Находим все формы в DOM и вызываем для них функцию setEventListeners */
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  
      setEventListeners(formElement);
  });
}

enableValidation();