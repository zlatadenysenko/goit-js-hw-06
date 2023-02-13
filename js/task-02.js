// 1) Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2) Додасть назву інгредієнта як його текстовий вміст.
// 3) Додасть елементу клас item.
// 4) Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listContainer = document.querySelector(`#ingredients`);

//------------1 варіант:------------------

// const items = ingredients.map((ingredient) => {
//   const ingredientItem = document.createElement(`li`);
//   ingredientItem.textContent = ingredient;
//   ingredientItem.classList.add(`item`);

//   return ingredientItem;
// });

// listContainer.append(...items);

//------------2 варіант:------------------

const makeIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientItem = document.createElement(`li`);
    ingredientItem.textContent = ingredient;
    ingredientItem.classList.add(`item`);

    return ingredientItem;
  });
};

const items = makeIngredients(ingredients);
listContainer.append(...items);
