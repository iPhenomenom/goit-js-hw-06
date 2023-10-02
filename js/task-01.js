// Отримуємо доступ до списку категорій ul#categories
const categoriesList = document.querySelector("#categories");

// Отримуємо всі елементи li.item в списку категорій
const categoryItems = categoriesList.querySelectorAll(".item");

// Виводимо кількість категорій в консоль
console.log(`Number of categories: ${categoryItems.length}`);

// Проходимося по кожному елементу li.item
categoryItems.forEach((categoryItem) => {
  // Отримуємо текст заголовку категорії (тег <h2>)
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  // Отримуємо всі елементи <li> у вкладеному списку категорії
  const categoryElements = categoryItem.querySelectorAll("ul li");

  // Виводимо інформацію про категорію в консоль
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});
