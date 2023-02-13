// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const sizeControl = document.querySelector(`#font-size-control`);
const spanText = document.querySelector(`#text`);

sizeControl.addEventListener(`input`, changeTextSize);

function changeTextSize(event) {
  spanText.style.fontSize = `${event.target.value}px`;
}
