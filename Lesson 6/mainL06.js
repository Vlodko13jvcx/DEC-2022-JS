// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let txt1 = 'hello world';
console.log(txt1.length + ' - символів довжина ' + txt1);
let txt2 = 'lorem ipsum';
console.log(txt2.length + ' - символів довжина ' + txt2);
let txt3 = 'javascript is cool';
console.log(txt3.length + ' - символів довжина ' + txt3);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let txt1UpCase = txt1.toUpperCase();
console.log(txt1UpCase);
let txt2UpCase = txt2.toUpperCase();
console.log(txt2UpCase);
let txt3UpCase = txt3.toUpperCase();
console.log(txt3UpCase);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let txt1LoCase = txt1UpCase.toLowerCase();
console.log(txt1LoCase);
let txt2LoCase = txt2UpCase.toLowerCase();
console.log(txt2LoCase);
let txt3LoCase = txt3UpCase.toLowerCase();
console.log(txt3LoCase);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let clearStr = str.trim();
console.log(clearStr);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str2 = 'Ревуть воли як ясла повні';
let stringToarray = (txt) => txt.split(' ');
console.log(stringToarray(str2));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

ranArrNumb = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let arrToStr = ranArrNumb.map(value => value + '');
console.log(arrToStr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//   або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let sortNums = (arr, direction) => (direction === 'ascending') ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
console.log(sortNums(nums, "ascending"));
console.log(sortNums([1, 56, 9, -20, 2345, 34, 98, 5], 'ascending'));
console.log(sortNums([1, 56, 9, -20, 2345, 34, 98, 5], ''));

// =============================================================================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let newSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(newSort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let newFilterD5 = coursesAndDurationArray.filter((value) => value.monthDuration > 5);
console.log(newFilterD5);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let newCoursesWithId = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, ...value};
});
console.log(newCoursesWithId);

// ==============================================================================================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'heart','diamond','clubs','spade',
//         value: '', // '6'-'10','jack','queen','king','ace','joker'
//     color:'', // 'red','black'
// }
let cards = [
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
]
// - знайти піковий туз
let fndSpadeAce = cards.filter(card => card.cardSuit == 'spade' && card.value == 'ace');
console.log(fndSpadeAce);

// - всі шістки
let fndAllSix = cards.filter(card => card.value == '6');
console.log(fndAllSix);

// - всі червоні карти
let fndAllRed = cards.filter(card => card.color == 'red');
console.log(fndAllRed);

// - всі буби
let fndAllDiamond = cards.filter(card => card.cardSuit == 'diamond');
console.log(fndAllDiamond);

// - всі трефи від 9 та більше
let fndClubNineAndMore = cards.filter(card => card.cardSuit == 'clubs' && (card.value > '8' || card.value > 8));
console.log(fndClubNineAndMore);

// ==========================================================================================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const reducedCards = cards.reduce((accum, current) => {
    if (current.cardSuit == 'heart') {
        accum.hearts.push(current);
    } else if (current.cardSuit == 'diamond') {
        accum.diamonds.push(current);
    } else if (current.cardSuit == 'clubs') {
        accum.clubs.push(current);
    } else {
        accum.spades.push(current);
    }
    return accum;
}, {hearts: [], diamonds: [], clubs: [], spades: []});
console.log(reducedCards);

// =====================================================================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let fndSass = coursesArray.filter((item) => item.modules.includes('sass'));
console.log(fndSass);

// --написати пошук всіх об'єктів, в який в modules є docker
let fndDocker = coursesArray.filter((item) => item.modules.includes('docker'));
console.log(fndDocker);
