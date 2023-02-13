// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// 1) Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2) Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3) Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const counter = document.querySelector(`#value`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const decrementBtn = document.querySelector(`[data-action="decrement"]`);

incrementBtn.addEventListener(`click`, () => {
  counterValue += 1;
  counter.textContent = counterValue;
});

decrementBtn.addEventListener(`click`, () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
