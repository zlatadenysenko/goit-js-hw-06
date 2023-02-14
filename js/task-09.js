// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector(`body`);
const spanColor = document.querySelector(`.color`);
const changeColor = document.querySelector(`.change-color`);

// --------1 варіант-----------

changeColor.addEventListener(`click`, makeChangeColor);

function makeChangeColor(element) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
}

// --------2 варіант-----------

// changeColor.addEventListener(`click`, (element) => {
//   const color = getRandomHexColor();
//   body.style.backgroundColor = color;
//   spanColor.textContent = color;
// });
