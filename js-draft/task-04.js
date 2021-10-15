// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const buttonDecrement = document.querySelector("button[data-action=decrement]");
const buttonIncrement = document.querySelector("button[data-action=increment]");
let value = document.querySelector("#value");
console.log(buttonDecrement);
console.log(buttonIncrement);
console.log(value.textContent);

// counterValue = 1;
// value = counterValue;
// console.log(value);
const handleClickLeft = () => {
  counterValue -= 1;
  //   console.log("event: ", event);
  //   console.log("event type: ", event.type);
  //     console.log("currentTarget: ", event.currentTarget);
  value.textContent = `new count: ${counterValue}`;
};

const handleClickRight = () => {
  counterValue += 1;
  //   console.log("event: ", event);
  //   console.log("event type: ", event.type);
  //     console.log("currentTarget: ", event.currentTarget);
  value.textContent = `new count: ${counterValue}`;
};

buttonDecrement.addEventListener("click", handleClickLeft);
buttonIncrement.addEventListener("click", handleClickRight);

// console.log(value.textContent);
