let counterValue = 0;

const buttonDecrement = document.querySelector("button[data-action=decrement]");
const buttonIncrement = document.querySelector("button[data-action=increment]");
let value = document.querySelector("#value");

const handleClickLeft = () => {
  counterValue -= 1;
  value.textContent = `${counterValue}`;
};

const handleClickRight = () => {
  counterValue += 1;
  value.textContent = `${counterValue}`;
};

buttonDecrement.addEventListener("click", handleClickLeft);
buttonIncrement.addEventListener("click", handleClickRight);
