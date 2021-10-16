const validInput = document.querySelector("#validation-input[data-length]");

const onBlur = (event) => {
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length === Number(validInput.dataset.length)) {
    validInput.classList.add("valid");
    validInput.classList.remove("invalid");
  } else {
    validInput.classList.add("invalid");
    validInput.classList.remove("valid");
  }
  if (event.currentTarget.value.length === 0) {
    validInput.classList.remove("invalid");
  }
  // if (Number(validInput.value.length) === Number(validInput.dataset.length)) {
  //   return validInput.classList.add("valid");
  // }
  // if (Number(validInput.value.length) === 0) {
  //   return;
  // }
  // return validInput.classList.add("invalid");
};

validInput.addEventListener("blur", onBlur);
