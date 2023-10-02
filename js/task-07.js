// Отримуємо доступ до елементів DOM
const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

// Додаємо слухача події "input" до елемента input#font-size-control
fontSizeControl.addEventListener("input", () => {
  // Отримуємо поточне значення повзунка
  const fontSize = fontSizeControl.value;

  // Змінюємо розмір тексту в елементі span#text
  textSpan.style.fontSize = fontSize + "px";
});
