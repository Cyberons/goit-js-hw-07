// Вибираємо всі елементи li.item зі списку ul#categories
const categories = document.querySelectorAll('#categories .item');

// Рахуємо й виводимо кількість категорій
console.log(`Numbers of: ${categories.length}`);

// Перебираємо кожну категорію
categories.forEach(category => {
  // Вибираємо заголовок категорії (тег <h2>)
  const categoryTitle = category.querySelector('h2').textContent;

  // Вибираємо всі елементи li в категорії
  const categoryItems = category.querySelectorAll('li');

  // Рахуємо й виводимо кількість елементів у категорії
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItems.length}`);
});