// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// 1) Розміри найпершого <div> - 30px на 30px.
// 2) Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3) Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// 4) Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector(`#boxes`);
const inputNumber = document.querySelector(`#controls>input`);

const createBoxes = (amount) => {
  const arrayEl = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");

    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();

    arrayEl.push(div);
  }
  return arrayEl;
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

createBtn.addEventListener(`click`, () => {
  let toAddElements = createBoxes(inputNumber.value);
  boxes.append(...toAddElements);
});

destroyBtn.addEventListener(`click`, () => {
  destroyBoxes();
});
