// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

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
const list = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  let lastIngredient = document.createElement("li");
  lastIngredient.textContent = ingredient;
  lastIngredient.classList.add("item");
  list.append(lastIngredient);
});

// +++++++ Method-3
// const list = document.querySelector("#ingredients");

// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// console.log(markup);
// // Check the console, you'll see a single string with HTML tags

// // Adding all the markup in one operation
// list.innerHTML = markup;
