// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.greeting = function () {
        console.log(`Hi, my name is ${this.name}. I am developer. If you have job for me call me ${this.phone}`);
    }
}

let users = [];
const user1 = new User(8, 'Stepan', 'Bandera', 'banderastep@gmail.com', 380970000001);
users[users.length] = user1;
const user2 = new User(3, 'Stefania', 'KalushOrkestra', 'stefania@gmail.com', 380970000002);
users.push(user2);
const user3 = new User(13, 'Koko', 'Chanel', 'chanelN5@gmail.com', 380970000003);
users[users.length] = user3;
const user4 = new User(77, 'Josef', 'Biden', 'potus@gmail.com', 380970000777);
users.push(user4);
const user5 = new User(21, 'Andzej', 'Duda', 'polska@gmail.com', 380973334444);
users[users.length] = user5;
const user6 = new User(50, 'Justin', 'Trudo', 'canada@gmail.com', 380979998888);
users.push(user6);
const user7 = new User(43, 'Olaf', 'Sholc', 'germany@gmail.com', 380973666666);
users[users.length] = user7;
const user8 = new User(10, 'Volodymyr', 'Zelensky', 'ukraine@gmail.com', 380977495901);
user8.greeting();
users.push(user8);
const user9 = new User(69, 'Emanuel', 'Makron', 'france@gmail.com', 380975556666);
users.push(user9);
const user10 = new User(100, 'Valera', 'Zaluzhny', 'afu@gmail.com', 380979997777);
users[users.length] = user10;

console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let evenIdUser = users.filter((item) => {
    if (item.id % 2 === 0) {
        return item;
    }
});
console.log(evenIdUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsersId = users.sort((a, b) => a.id - b.id);
console.log(sortUsersId);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

//   створити пустий масив, наповнити його 10 об'єктами Client

let clients = [];
clients.push(new Client(20, 'Ivan', 'Franko', 'kamenyar@gmail.com', 380970000001, ['foxMykyta']));
clients.push(new Client(200, 'Lesya', 'Ukrainian', 'ukrainel@gmail.com', 380970000002, ['iWillNotDie', 'hope']));
clients.push(new Client(100, 'Taras', 'Shevchenko', 'sheva@gmail.com', 380970000003, ['Zapovit', 'whenIwas13']));
clients.push(new Client(59, 'Stepan', 'Bandera', 'ourFather@gmail.com', 380970000004, ['Ukraine', 'UberAles']));
clients.push(new Client(92, 'Evgen', 'Konovalec', 'ounupa@gmail.com', 380970000005, ['OUN-UPA', 'resistance', 'waskilled']));
clients.push(new Client(3, 'Stefania', 'KalushOrkestra', 'stefania@gmail.com', 380970000006, ['Eurovision2022']));
clients.push(new Client(21, 'Andzej', 'Duda', 'polska@gmail.com', 380970000007, ['Biedronka', 'euro2012']));
clients.push(new Client(43, 'Petro', 'Roshen', 'roshen@gmail.com', 380970000008, ['candys']));
clients.push(new Client(10, 'Volodymyr', 'Zelensky', 'ukraine@gmail.com', 380977495901, ['piano', 'eggs', 'clac-clac']));
clients.push(new Client(77, 'Josef', 'Biden', 'potus@gmail.com', 380970000777, ['Abrams', 'M777', 'F16', 'Jawelin', 'Ar15']));
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClientsOrder = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClientsOrder);

console.log(clients.sort((a, b) => a.phone - b.phone));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//   максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, factory, year, maxspeed, engineVolume) {
    this.model = model;
    this.factory = factory;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
            // if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
        }
    };
    this.newMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let vito = new Car('VITO', 'Mercedes-Benz', 2017, 190, 1995);
console.log(vito);
vito.drive();
vito.info();
vito.newMaxSpeed(20);
vito.changeYear(2022);
vito.addDriver({name: 'Volodymyr', age: 42, status: true});
console.log(vito.driver);
console.log(vito);

// - (Те саме, тільки через клас)
//    Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//    максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, factory, year, maxspeed, engineVolume) {
        this.model = model;
        this.factory = factory;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }

    info() {
        for (const key in this) {
            console.log(`${key} - ${this[key]}`);
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let touran = new Car2('Touran', 'Volkswagen', 2015, 230, 1995);
console.log(touran);
touran.drive();
touran.info();
touran.increaseMaxSpeed(20);
touran.changeYear(2020);
touran.addDriver({name: 'Vlodko', age: 42, status: true});
console.log(touran.driver);
console.log(touran);

// - створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popelushka {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let popelushkaArr = [
    new Popelushka('daryna', 30, 37),
    new Popelushka('anna', 22, 37),
    new Popelushka('solomia', 19, 38),
    new Popelushka('ira', 24, 36),
    new Popelushka('lesia', 26, 41),
    new Popelushka('Marta', 20, 39),
    new Popelushka('nadia', 29, 35),
    new Popelushka('genia', 18, 36),
    new Popelushka('nina', 21, 38),
    new Popelushka('olya', 27, 40),
];
console.log(popelushkaArr);

//   Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, findShoe) {
        this.name = name;
        this.age = age;
        this.findShoe = findShoe;
    }
}

let prince = new Prince('Marko', 24, 39);
console.log(prince);

//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let newcouple = (popelushkaArr, prince) => {
    for (const item of popelushkaArr) {
        if (item.footsize === prince.findShoe) {
            return `Tvoya popelushka: ${item.name}`
        }
    }
};
console.log(newcouple(popelushkaArr, prince));

//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findPrincess = popelushkaArr.find((item) => item.footsize === prince.findShoe);
console.log(findPrincess);
