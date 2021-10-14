// В HTML есть список категорий ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>
// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
// и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const items = document.querySelectorAll(".item");
console.log(items);
console.log(`Number of categories: ${items.length}`);

// const markup = [...items]
//   .map((item) => `Category: ${item.firstElementChild}`)
//   .join("");
// console.log(markup);
// const categoryKey = items.querySelector(item.firstElementChild);
// let itemCategory = items;
// const categoryProperties = { Category: "", Elements: 0 };
// const subtitle = function{items.querySelector(items.children)};
// console.log(subtitle);

// const subtitle = document.querySelector("h2");
// console.log(subtitle.textContent);

// let elements = document.querySelectorAll("li > ul");
// // console.log(elements);
// for (let elem of elements) {
//   console.log(`Category: ${"h2 ~ elem".innerHTML}`);
//   console.log(`Elements: ${elem.innerHTML}`);
// }

const itemsRef = document.querySelectorAll(".item");

itemsRef.forEach((element) => {
  console.log(`Category: ${element.innerHTML}`);
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
// ('New and <span class="accent">improved</span> title');

// let subtitles = document.querySelectorAll("h2");
// for (let subtitle of subtitles) {
//   console.log(`Category: ${subtitle.innerHTML}`);
//   console.log(`Elements: ${subtitle.innerHTML}`);
// }
