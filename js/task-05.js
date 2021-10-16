const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

const handleInput = () => {
  const inputName = input.value.trim();
  if (inputName !== "") {
    return (output.textContent = inputName);
  }
  return (output.textContent = "Anonymous");
};

input.addEventListener("input", handleInput);
