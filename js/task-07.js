const inpuntFont = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

inpuntFont.value = Number.parseInt(window.getComputedStyle(spanText).fontSize);

const handleInput = () => {
  spanText.style.fontSize = `${inpuntFont.value}px`;
};

inpuntFont.addEventListener("input", handleInput);
