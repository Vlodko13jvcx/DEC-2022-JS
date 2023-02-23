// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен
// елемент в консоль

const arr = [];
arr[arr.length] = 'yobana';
arr[arr.length] = 'rusnya';
arr[arr.length] = 125;
arr[arr.length] = 44;
arr[arr.length] = 'auto';
arr[arr.length] = 'moto';
arr[arr.length] = 777;
arr[arr.length] = 88;
arr[arr.length] = true;
arr[arr.length] = false;
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let charlie = {
    title: 'Charlie and the chocolate factory',
    pageCount: 238,
    genre: 'literature for children'
}
console.log(charlie);

let garmyder = {
    title: 'pandemonium at school',
    pageCount: 186,
    genre: 'literature for children'
}
console.log(garmyder);

let silence = {
    title: '140 decibels of silence',
    pageCount: 126,
    genre: 'story'
}
console.log(silence);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre,
//   authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let charlieAtr = {
    title: 'Charlie and the chocolate factory',
    pageCount: 238,
    genre: 'literature for children',
    authors: [
        {name: 'Roald Dal', age: 87},
        {name: 'Danja', age: 77}
    ]
}
console.log(charlieAtr);

let garmyderAtr = {
    title: 'pandemonium at school',
    pageCount: 186,
    genre: 'literature for children',
    authors: [{name: 'Some Author', age: 67}]
}
console.log(garmyderAtr);

let silenceAtr = {
    title: '140 decibels of silence',
    pageCount: 126,
    genre: 'story',
    authors: [{name: 'Chat GPT', age: 1}]
}
console.log(silenceAtr);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
//   Вивести в консоль пароль кожного користувача

let users = [
    {name: 'sasha', username: 'aleks', password: 2233},
    {name: 'roman', username: 'roma44', password: 8520},
    {name: 'stepan', username: 'bandera', password: 1598},
    {name: 'yura', username: 'Jo87', password: 9630},
    {name: 'ivan', username: 'pyyti', password: 7412},
    {name: 'kolya', username: 'katleta', password: 3578},
    {name: 'katya', username: 'uti00', password: 8624},
    {name: 'vova', username: 'namber1', password: 4488},
    {name: 'olya', username: 'solja77', password: 7530},
    {name: 'ira', username: 'irusya69', password: 7000},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю,
//     виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1; // 1, 0, -3
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
//   попадає число (в першу, другу, третю или четверту частину години).

let time = 41;
if (time <= 14) {
    console.log(time + "хв - це перша чверть години.");
} else if (time <= 29) {
    console.log(time + "хв - це друга чверть години.");
} else if (time <= 44) {
    console.log(time + "хв - це третя чверть години.");
} else if (time <= 59) {
    console.log(time + "хв - це четверта чверть години.");
} else {
    console.log("Будьте уважні! Ви некоректно ввели кількість хвилин!");
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
//   це число (у першу, другу чи третю).

let day = 27;
if (day <= 10 && day !== 0) {
    console.log(day + " - це перша декада місяця.");
} else if (day > 10 && day <= 20) {
    console.log(day + " - це друга декада місяця.");
} else if (day > 20 && day <= 31) {
    console.log(day + " - це третя декада місяця.");
} else {
    console.log("Ахтунг! Ви некоректно вказали день місяця!");
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//   відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfWeek = +prompt("Введіть порядковий номер дня тижня від 1 до 7");
switch (dayOfWeek) {
    case 1:
        console.log("Розклад на Понеділок...");
        break;
    case 2:
        console.log("Розклад на Вівторок...");
        break;
    case 3:
        console.log("Розклад на Середу...");
        break;
    case 4:
        console.log("Розклад на Четвер...");
        break;
    case 5:
        console.log("Розклад на Пятницю...");
        break;
    case 6:
        console.log("Розклад на Суботу...");
        break;
    case 7:
        console.log("Relax! Tosya will do it, in Monday!");
        break;
    default:
        console.log("Неправильно введені дані, повторіть ше раз.")
}

// - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох.
//   Також потрібно врахувати коли введені рівні числа.

const a = 42;
const b = 27;
if (a > b) {
    console.log(`Число ${a} більше від ${b}`);
} else if (a < b) {
    console.log(`Число ${a} менше від ${b}`);
} else {
    console.log(`Число А=${a} рівне числу Б=${b}`);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//   за допомоги оператора || буде присвоювати змінній х значення "default" якщо значення змінної х являється
//   falsy (хибноподібні, тобто приводиться до false)

let xn = '5';
xn = xn || 'default';
console.log(xn);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//   кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
