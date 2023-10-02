// Отримуємо доступ до елементів DOM
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const bodyElement = document.body;

// Функція для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Додаємо слухача події "click" до кнопки
changeColorButton.addEventListener("click", () => {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Встановлюємо випадковий колір як фон елемента <body>
  bodyElement.style.backgroundColor = randomColor;

  // Оновлюємо текст в елементі span.color для відображення поточного кольору
  colorSpan.textContent = randomColor;
});
