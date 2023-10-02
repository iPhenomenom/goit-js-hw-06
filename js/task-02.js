const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Отримуємо доступ до списку ul#ingredients
const ingredientsList = document.getElementById("ingredients");

// Створюємо елементи <li> для кожного інгредієнта та додаємо їх до списку
ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li"); // Створюємо новий <li> елемент
  listItem.textContent = ingredient; // Додаємо текстовий вміст інгредієнта
  listItem.classList.add("item"); // Додаємо клас "item" до <li> елемента
  ingredientsList.appendChild(listItem); // Додаємо <li> до списку
});
