const formRef = document.querySelector(".login-form");

const formSubmit = (event) => {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;
  if (!email || !password) {
    alert("Все поля должны быть заполнены!");
    return;
  }
  //   console.log({ email, password });
  const formData = new FormData(event.currentTarget);

  const userData = {};
  formData.forEach((value, name) => {
    userData[name] = value;
  });
  console.log(userData);
};
formRef.addEventListener("submit", formSubmit);
