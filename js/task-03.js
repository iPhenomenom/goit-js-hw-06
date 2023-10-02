const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Отримуємо доступ до списку <ul> з класом "gallery"
const galleryList = document.querySelector(".gallery");

// Створюємо розмітку для кожного зображення та додаємо її до списку
const imageMarkup = images.map((image) => `
  <li class="gallery-item">
    <img src="${image.url}" alt="${image.alt}" class="gallery-image">
  </li>
`).join(''); // Об'єднуємо розмітку в одну рядок

// Додаємо розмітку галереї до списку за одну операцію
galleryList.insertAdjacentHTML("beforeend", imageMarkup);
