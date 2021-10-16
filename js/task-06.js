const validInput = document.querySelector("#validation-input[data-length]");

const onBlur = () => {
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
