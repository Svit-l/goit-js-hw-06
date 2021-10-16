// Напиши скрипт, который реагирует на изменение значения input#font-size-control(событие input)
//  и изменяет инлайн-стиль span#text обновляя свойство font-size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

// const inpuntFont = document.querySelector("input#font-size-control");
// const spanText = document.querySelector("span#text");

// console.log(inpuntFont);
// console.log(spanText);

// const handleInput = () => {
//   spanText.style.fontSize = `${inpuntFont.value}px`;
// };

// inpuntFont.addEventListener("input", handleInput);

// +++++++++ Способ 2

const inpuntFont = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

console.log(inpuntFont.value);

console.log(spanText);

const handleInput = (event) => {
  spanText.style.fontSize = `${event.currentTurget.value}px`;
};
inpuntFont.addEventListener("input", handleInput);

// +++++++++++ Пример
// function handleInput() {
//   const range = document.getElementById(inpuntFont); // - это Input
//   const span = document.getElementById(spanText); //  - абзац
//   span.value = range.value;
// }
