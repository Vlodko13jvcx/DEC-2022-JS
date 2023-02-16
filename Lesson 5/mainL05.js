// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let areaRectangle = (a, b) => a * b;
document.write(areaRectangle(12, 10) + ' - площа прямокутника' + '<br>');

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.1415;
let areaRound = (radius) => Math.round(PI * Math.pow(radius, 2));
document.write(`<h4>${areaRound(10)} - площа кола </h4>`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaCylinder = (r, h) => (2 * PI * r * h) + (2 * PI * Math.pow(r, 2)); //площа бічної поверхні + площа 2-х основ
document.write(`<div>${areaCylinder(10, 15)} - площа циліндра </div><hr>`);

// - створити функцію яка приймає масив та виводить кожен його елемент

let massiv = [10, 20, 30, 40, 50, "octen"];
let masOutput = (mas) => {
    for (const element of mas) {
        document.write(`<div>${element}</div>`);
    }
}

masOutput(massiv);
document.write(`<hr>`);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let outDoc = (txt) => document.write(`<p>${txt}</p>`);
outDoc('abra kadabra');
document.write(`<hr>`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let txtLi = (ххх) => {
    document.write(`<ul>`);
    document.write(`<li>${ххх}</li>`);
    document.write(`<li>${ххх}</li>`);
    document.write(`<li>${ххх}</li>`);
    document.write(`</ul>`);
}
txtLi('All you need is LOVE!');
document.write(`<hr>`);

// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let txtList = (yyy, k) => {
    document.write(`<ul>`);
    for (i = 0; i < k; i++) {
        document.write(`<li>${yyy}</li>`);
    }
    document.write(`</ul>`);
}
txtList('LOVE is all you need!', 4);
document.write(`<hr>`);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let massElemts = ['duck', 100, "BMW", true, 1500];
let buldLi = (mx) => {
    document.write(`<ul>`);
    for (i = 0; i < mx.length; i++) {
        document.write(`<li>${mx[i]}</li>`);
    }
    document.write(`</ul>`);
}
buldLi(massElemts);
document.write(`<hr>`);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.

let myChild = [{id: 1, name: 'Marko', age: 14}, {id: 2, name: 'Marta', age: 12}, {id: 3, name: 'Solomia', age: 5}];
let arrObj = (arrX) => {
    for (const arrayElement of arrX) {
        document.write(`<div>${arrayElement.id}. ${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}
arrObj(myChild);
document.write(`<hr>`);

// - створити функцію яка повертає найменьше число з масиву

someArray = [5, 7, 11, 23, 41, 8, 20, 9, 3];

let xMinArr = (xxx) => {
    let min = xxx[0];
    for (i = 0; i < xxx.length; i++) {
        if (xxx[i] < min) {
            min = xxx[i];
        }
    }
    return min;
}
document.write(`<h4>${xMinArr(someArray)} - найменше число з масиву</h4>`);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10]) //->13

let sumArr = (arr) => {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
document.write(`<h4>${sumArr(someArray)} - сумма елементів масиву</h4><br>`);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

someSwapArray = [11, 22, 33, 44, 55, 66];
let swap = (arr, index1, index2) => {
    let first = arr[index1];
    let second = arr[index2];
    arr[index1] = second;
    arr[index2] = first;
    return arr;
}
document.write(`<div>${swap(someSwapArray, 0, 2)}</div>`);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (i = 0; i < currencyValues.length; i++) {
        const curVal = currencyValues[i];
        if (curVal.currency === exchangeCurrency) {
            document.write('<h4>' + (sumUAH / curVal.value) + '</h4>');
        }
    }
}
exchange(40000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}, {currency: 'GBP', value: 44.87}], 'GBP');
