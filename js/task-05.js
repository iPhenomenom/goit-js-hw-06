// Отримуємо доступ до елементів DOM
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Додаємо слухача події "input" до поля введення
nameInput.addEventListener("input", () => {
  // Отримуємо поточне значення поля введення
  const inputValue = nameInput.value;

  // Перевіряємо, чи є поле введення порожнім
  if (inputValue.trim() === "") {
    // Якщо порожнє, встановлюємо текст "Anonymous" для спану
    nameOutput.textContent = "Anonymous";
  } else {
    // Якщо не порожнє, встановлюємо введений текст для спану
    nameOutput.textContent = inputValue;
  }
});
