// Отримуємо доступ до форми
const loginForm = document.querySelector(".login-form");

// Додаємо слухача події "submit" до форми
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Забороняємо перезавантаження сторінки при відправленні форми

  // Отримуємо доступ до полів форми за допомогою властивості elements
  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  // Перевіряємо, чи всі поля заповнені
  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Please fill in all fields."); // Попередження про незаповнені поля
    return; // Припиняємо обробку форми
  }

  // Створюємо об'єкт із введеними даними
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  // Виводимо об'єкт із даними в консоль
  console.log(formData);

  // Очищаємо значення полів форми
  this.reset();
});
