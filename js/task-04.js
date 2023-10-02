// Отримуємо доступ до елементів DOM
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterValueSpan = document.querySelector('#value');

// Ініціалізуємо змінну counterValue початковим значенням 0
let counterValue = 0;

// Додаємо слухача події для кнопки "Decrement"
decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  counterValueSpan.textContent = counterValue; // Оновлюємо значення на сторінці
});

// Додаємо слухача події для кнопки "Increment"
incrementButton.addEventListener('click', () => {
  counterValue += 1;
  counterValueSpan.textContent = counterValue; // Оновлюємо значення на сторінці
});
