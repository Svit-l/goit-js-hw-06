const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const lastIngredient = document.createElement("li");
  lastIngredient.textContent = ingredient;
  lastIngredient.classList.add("item");
  return lastIngredient;
});
list.append(...elements);

// +++++++ Method-2
// const list = document.querySelector("#ingredients");

// ingredients.forEach((ingredient) => {
//   let lastIngredient = document.createElement("li");
//   lastIngredient.textContent = ingredient;
//   lastIngredient.classList.add("item");
//   list.append(lastIngredient);
// });

// +++++++ Method-3
// const list = document.querySelector("#ingredients");

// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// // console.log(markup);

// list.innerHTML = markup;
