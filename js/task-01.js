const itemsRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsRef.length}

`);

itemsRef.forEach((element) => {
  //   console.log(`Category: ${element.innerHTML}`);
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}
  `);
});
