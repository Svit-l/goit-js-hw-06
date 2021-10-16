let counterValue = 0;

const buttonDecrement = document.querySelector("button[data-action=decrement]");
const buttonIncrement = document.querySelector("button[data-action=increment]");
let valueEl = document.querySelector("#value");

const handleClickLeft = () => {
  counterValue -= 1;
  valueEl.textContent = `${counterValue}`;
};

const handleClickRight = () => {
  counterValue += 1;
  valueEl.textContent = `${counterValue}`;
};

buttonDecrement.addEventListener("click", handleClickLeft);
buttonIncrement.addEventListener("click", handleClickRight);
