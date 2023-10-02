// Отримуємо доступ до елементів DOM
const input = document.querySelector("#controls input");
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector("#boxes");

// Функція для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція для створення колекції елементів
function createBoxes(amount) {
  const initialSize = 30;
  const step = 10;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * step;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

// Функція для очищення колекції елементів
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// Додаємо слухача події "click" до кнопки "Create"
createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
});

// Додаємо слухача події "click" до кнопки "Destroy"
destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
