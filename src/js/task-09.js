// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = getRandomHexColor();

const body = document.querySelector(`body`);
const spanColor = document.querySelector(`.color`);
const changeColor = document.querySelector(`.change-color`);

changeColor.addEventListener(`click`, makeChangeColor);

function makeChangeColor(event) {
  body.style.backgroundColor = color;
  spanColor.textContent = color;
}
