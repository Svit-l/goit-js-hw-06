// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//     проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const validInput = document.querySelector("#validation-input[data-length]");
console.log(validInput.dataset.length);
console.log(8);

const onBlur = () => {
  console.log(validInput.value.length);
  if (Number(validInput.value.length) === Number(validInput.dataset.length)) {
    return validInput.classList.add("valid");
  }
  if (Number(validInput.value.length) === 0) {
    return;
  }
  return validInput.classList.add("invalid");
};

const onFocus = () => {
  validInput.classList.remove("valid");
  validInput.classList.remove("invalid");
};

validInput.addEventListener("blur", onBlur);
validInput.addEventListener("focus", onFocus);

// ++++++++++++++++ Пример

// input.onblur = function () {
//   if (!input.value.includes("@")) {
//     // не email
//     input.classList.add("invalid");
//     error.innerHTML = "Пожалуйста, введите правильный email.";
//   }
// };

// input.onfocus = function () {
//   if (this.classList.contains("invalid")) {
//     // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
//     this.classList.remove("invalid");
//     error.innerHTML = "";
//   }
// };
