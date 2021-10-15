// Напиши скрипт который, при наборе текста в инпуте input#name-input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой,
//         в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

// console.log(input.placeholder);
// console.log(input.textContent);

// const handleInput = ({ key }) => {
//   output.textContent += `${key}`;
//   console.log(input.textContent);
//   if (output.textContent === "") {
//     console.log((output.textContent = "Anonymous"));
//   }
// };

// document.addEventListener("keydown", handleInput);

// document.addEventListener("keydown", reset);

const handleInput = () => {
  const inputName = input.value.trim();
  if (inputName !== "") {
    return (output.textContent = inputName);
  }
  return (output.textContent = "Anonymous");
};

document.addEventListener("input", handleInput);

// // пример из MDN Web Docs
// document.addEventListener("keydown", logKey);

// function logKey(e) {
//   log.textContent += ` ${e.key}`;
// }
