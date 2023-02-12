// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним
//   текстом всередині
document.write(`<h3>За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині</h3>`)
for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello world!</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним
//   текстом і індексом всередині
document.write(`<h3>За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині</h3>`)
for (i = 0; i < 10; i++) {
    document.write(`<div>Congrads - ${i}</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним
//   текстом всередині.
document.write(`<h3>За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.</h3>`)
let k = 0;
while (k < 20) {
    document.write(`<h1>Again</h1>`);
    k++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним
//   текстом і індексом всередині.
document.write(`<h3>За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.</h3>`)
k = 0;
while (k < 20) {
    document.write(`<h1>Any text - ${k}</h1>`);
    k++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// Масив:
document.write(`<h3>Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону</h3>`)

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`);
}
document.write(`</ul>`);

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write(`<div class="body-product">`);

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(`<div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price} UAH</h3>
        <img src="${product.image}" alt="${product.title}" class="product-image">
    </div>`)
}

document.write(`</div>`);

// ----------------------------------------------------------------------
//     є масив
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
document.write(`<h3>Є масив за допомоги циклу вивести:</h3>`);

document.write(`<h3>Користувачі зі статусом true</h3>`);
for (i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.status === true) {
        document.write(`<div>${user.name} - status: ${user.status}</div>`);
    }
}

document.write(`<h3>Користувачі зі статусом false</h3>`);
for (i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.status === false) {
        document.write(`<div>${user.name} - status: ${user.status}</div>`);
    }
}

document.write(`<h3>Користувачі які старші за 30 років</h3>`);
for (i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.age > 30) {
        document.write(`<div>${user.name} - age: ${user.age}</div>`);
    }
}