// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().
// 1) Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// 2) Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

const imagesMurkup = images
  .map(
    (image) =>
      `<li> <img class="picture" src="${image.url}" alt="${image.alt}" width="250"> </li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", imagesMurkup);

const pictures = document.querySelectorAll(".picture");

list.style.display = "flex";
list.style.gap = "40px";
list.style.padding = "30px";
list.style.justifyContent = "center";
list.style.alignItems = "center";
list.style.listStyleType = "none";
list.style.backgroundColor = "moccasin";
list.style.border = "thick solid coral";
list.style.borderRadius = "50px";
