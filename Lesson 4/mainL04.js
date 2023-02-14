// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let a = +prompt('Давайте обчислимо площу прямокутника. Введіть значення першої сторони');
let b = +prompt('Введіть значення другої сторони');

function areaRectangle(a, b) {
    return a * b;
}

console.log(areaRectangle(a, b) + ' - площа прямокутника');
document.write(areaRectangle(a, b) + ' - площа прямокутника' + '<br>');

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let r = +prompt('Давайте обчислимо площу кола. Введіть значення радіуса');
const PI = 3.1415;

function areaRound(w) {
    return Math.round(PI * Math.pow(w, 2));
}

console.log(areaRound(r) + ' - площа кола');
document.write(areaRound(r) + ' - площа кола' + '<br>');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let rcd = +prompt('Давайте обчислимо площу циліндра. Введіть значення радіуса циліндра');
let hcd = +prompt('Введіть значення висоти циліндра');

function areaCylinder(r, h) {
    let sCylSide = 2 * PI * r * h; // площа бічної поверхні
    let sCylBase = 2 * PI * Math.pow(r, 2); // площа 2-х основ
    return sCylBase + sCylSide;
}

console.log(areaCylinder(rcd, hcd) + ' - площа циліндра');
document.write(areaCylinder(rcd, hcd) + ' - площа циліндра' + '<br>');

// - створити функцію яка приймає масив та виводить кожен його елемент

let massiv = [10, 20, 30, 40, 50, "octen"];

function masOutput(mas) {
    for (i = 0; i < mas.length; i++) {
        console.log(mas[i]);
        document.write(mas[i] + '<br>');
    }
}

masOutput(massiv);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let docTxt = prompt('Введіть будь-який текст');

function outDoc(txt) {
    document.write('<p>' + txt + '</p>');
}

outDoc(docTxt);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function txtLi(ххх) {
    document.write(`<ul>`);
    document.write(`<li>${ххх}</li>`);
    document.write(`<li>${ххх}</li>`);
    document.write(`<li>${ххх}</li>`);
    document.write(`</ul>`);
}

txtLi('Love is all you need');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function txtList(ххх, k) {
    document.write(`<ul>`);
    for (i = 0; i < k; i++) {
        document.write(`<li>${ххх}</li>`);
    }
    document.write(`</ul>`);
}

txtList('Love is all you need', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let massElemts = ['duck', 100, "BMW", true, 1500];

function buldLi(mx) {
    document.write(`<ul>`);
    for (i = 0; i < mx.length; i++) {
        document.write(`<li>${mx[i]}</li>`);
    }
    document.write(`</ul>`);
}

buldLi(massElemts);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.

let myChild = [{id: 1, name: 'Marko', age: 13}, {id: 2, name: 'Marta', age: 11}, {id: 3, name: 'Solomia', age: 4}];

function arrObj(arrX) {
    for (const arrayElement of arrX) {
        document.write(`<div>${arrayElement.id}. ${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}

arrObj(myChild);

// - створити функцію яка повертає найменьше число з масиву

someArray = [5, 7, 11, 23, 41, 8, 20, 9, 3];

function xMinArr(xxx) {
    let min = xxx[0];
    for (i = 0; i < xxx.length; i++) {
        if (xxx[i] < min) {
            min = xxx[i];
        }
    }
    return min;
}

console.log(`${xMinArr(someArray)} - найменше число з масиву`);
document.write(`${xMinArr(someArray)} - найменше число з масиву <br>`);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10]) //->13

function sumArr(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(`${sumArr(someArray)} - сумма елементів масиву`);
document.write(`${sumArr(someArray)} - сумма елементів масиву <br>`);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

someSwapArray = [11, 22, 33, 44, 55];

function swap(arr, index1, index2) {
    let first = arr[index1];
    let second = arr[index2];
    arr[index1] = second;
    arr[index2] = first;
    return arr;
}

document.write(`<div>${swap(someSwapArray, 0, 2)}</div>`);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (i = 0; i < currencyValues.length; i++) {
        const curVal = currencyValues[i];
        if (curVal.currency === exchangeCurrency) {
            console.log(Math.round((sumUAH / curVal.value) * 100) / 100);
            document.write('<h3>' + Math.round((sumUAH / curVal.value) * 100) / 100 + '</h3>');
        }
    }
}

exchange(40000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}, {currency: 'GBP', value: 44.87}], 'GBP');
