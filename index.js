// Задача 1: Преобразовать массив цен в массив строковых значений с указанием валюты
const prices = [100, 150, 200, 250];
const formattedPrices = prices.map(price => `${price} р`);
console.log(formattedPrices);

// Задача 2: Оставить только пользователей старше 18 лет
const users = [
  ['alex', 32],
  ['tomas', 17],
  ['olga', 14],
  ['andre', 24]
];
const adultUsers = users.filter(user => user[1] > 18);
console.log(adultUsers);

// Задача 3: Вычислить общую стоимость всех товаров
const products = [
  { title: 'пицца', price: 200 },
  { title: 'баранина', price: 300 },
  { title: 'креветки', price: 400 }
];
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);
