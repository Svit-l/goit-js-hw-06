const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
    class: "galary__img",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    class: "galary__img",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
    class: "galary__img",
  },
];

const gallery = document.querySelector(".gallery");

const markup = images
  .map(
    ({ url, alt }) =>
      `<li class="galary__item"><img class="galary__img" src="${url}" alt="${alt}"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);
