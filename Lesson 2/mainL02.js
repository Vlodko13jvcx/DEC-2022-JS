// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен
// елемент в консоль
//
// let arr = [];
// arr[arr.length] ='yobana';
// arr[arr.length] ='rusnya';
// arr[arr.length] = 125;
// arr[arr.length] = 44;
// arr[arr.length] ='auto';
// arr[arr.length] = 'moto';
// arr[arr.length] = 777;
// arr[arr.length] = 88;
// arr[arr.length] = true ;
// arr[arr.length] = false;
// console.log(arr);

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

let authors = [name,'age'];
console.log(authors);

console.log(charlie.authors);
//
// garmyder.authors = [name,'age'];
// console.log(garmyder);
//
// silence.authors = [name,age];
// console.log(silence);
