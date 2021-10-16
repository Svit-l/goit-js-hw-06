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
