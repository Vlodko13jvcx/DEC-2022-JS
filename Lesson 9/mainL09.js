// - створити блок

const block = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta

block.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

block.style.backgroundColor = 'silver';
block.style.color = 'blue';
block.style.fontSize = '30px';
block.innerText = 'Hello world';

// - додати цей блок в body.

const body = document.querySelector('body');
body.appendChild(block);

// - клонувати його повністю, та додати клон в body.

const clone = block.cloneNode(true);
clone.style.color = 'yellow';
body.appendChild(clone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const liArr = ['Main', 'Products', 'About us', 'Contacts'];
const ul = document.createElement('ul');

for (const item of liArr) {
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
body.appendChild(ul);

// ==========================================================================================
// - Є масив

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration. Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `Title: ${element.title}, monthDuration: ${element.monthDuration}`;
    body.appendChild(div);
}

// ====================================================================================================
// - Є масив
//   За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
//   з title  елементу, та <p class='description'> з monthDuration елементу. Завдання робити через цикли.

for (const item of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList = 'item';
    const h1 = document.createElement('h1');
    h1.classList = 'heading';
    h1.innerText = `${item.title}`;
    const p = document.createElement('p');
    p.classList = 'description';
    p.innerText = `MonthDuration: ${item.monthDuration}`;
    div.append(h1, p);
    body.appendChild(div);
}

// =================================================================================================
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

//   Проітерувати його, створиши для кожного об'єкту масиву <div class='member'> та наповнити його данними з об'єкту.
//   Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

for (const item of simpsons) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const a = document.createElement('a');
    const img = document.createElement('img');

    div.classList = 'member';

    h1.innerText = `${item.name} - ${item.surname}`;
    a.innerText = `Age: ${item.age}`;
    p.innerText = `${item.info}`;
    img.setAttribute('alt', `${item.name} photo`);
    img.setAttribute('src', item.photo);

    div.append(h1, a, img, p);

    body.appendChild(div);
}

// =============================================================================================================
//   Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

const coursesArray = [
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

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами. Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

for (const course of coursesArray) {
    const block2 = document.createElement('div');
    const title = document.createElement('h1');
    const duration = document.createElement('div');
    const month = document.createElement('div');
    const hour = document.createElement('div');
    const ul = document.createElement('ul');

    title.innerText = `${course.title}`;
    month.innerText = `monthDuration: ${course.monthDuration}`;
    hour.innerText = `hourDuration: ${course.hourDuration}`;
    for (const item of course.modules) {
        const li = document.createElement('li');
        li.innerText = item;
        li.classList.add('blue', 'list-none', 'padding10');
        ul.appendChild(li);
    }

    block2.classList.add('block2');
    title.classList.add('blue', 'text-center');
    duration.classList.add('flex');
    month.classList.add('blue', 'text-center', 'grow1');
    hour.classList.add('blue', 'text-center', 'grow5');
    ul.classList.add('blue', 'margin10');

    duration.append(month, hour);
    block2.append(title, duration, ul);
    body.append(block2);
}

// =================================================================================================================
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні
//   на кнопку зникав елемент з id="text".

const p1 = document.createElement('p');
const btn = document.createElement('button');
p1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, sunt!';
p1.id = 'text';
btn.innerText = 'Click me to hide text';
btn.onclick = () => {
    document.getElementById('text').style.display = 'none';
}
body.append(p1, btn);
document.write(`<hr>`);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію. При натисканні на кнопку зчитати інформацію
//   з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let inputForm = document.createElement(`input`);
inputForm.setAttribute('type', 'number')
let button2 = document.createElement('button');
let messa = document.createElement('div');
button2.innerText = 'Confirm';
button2.onclick = () => {
    if (inputForm.value < 18) {
        messa.innerText = 'You are child';
    } else {
        messa.innerText = 'Welcome';
    }
}
body.append(inputForm, button2, messa);
