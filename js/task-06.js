// Отримуємо доступ до елементів DOM
const validationInput = document.getElementById("validation-input");

// Додаємо слухача події "blur" до інпуту
validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value;
  const dataLength = parseInt(validationInput.getAttribute("data-length"));

  // Перевіряємо, чи введено правильну кількість символів
  if (inputValue.length === dataLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
