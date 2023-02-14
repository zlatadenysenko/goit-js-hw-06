// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid

const textInput = document.querySelector(`#validation-input`);

textInput.addEventListener(`blur`, onInputBlur);

const dataLength = textInput.getAttribute(`data-length`);
console.log(dataLength);

// ----------1 варіант---------

// function onInputBlur(event) {
//   if (textInput.value.length == dataLength) {
//     textInput.classList.add(`valid`);
//     textInput.classList.remove(`invalid`);
//   } else {
//     textInput.classList.add(`invalid`);
//     textInput.classList.remove(`valid`);
//   }
// }

// ----------2 варіант---------

function onInputBlur(event) {
  if (textInput.classList.contains(`invalid`)) {
    textInput.classList.remove(`invalid`);
  } else {
    if (textInput.classList.contains(`valid`)) {
      textInput.classList.remove(`valid`);
    }
  }

  if (textInput.value.length == dataLength) {
    textInput.classList.add(`valid`);
  } else {
    textInput.classList.add(`invalid`);
  }
}
