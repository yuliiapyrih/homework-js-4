// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
function Tag(titleOfTag, action, attrs){
    this.titleOfTag=titleOfTag;
    this.action=action;
    this.attrs=attrs;
}
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
let attrsTagA=[{titleOfAttr: 'accesskey', actionOfAttr:'Активация ссылки с помощью комбинации клавиш.'},{titleOfAttr: 'href', actionOfAttr:'Задает адрес документа, на который следует перейти.'}];
let tagA=new Tag(
    'a',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.',
    attrsTagA
    );

let attrsTagDiv=[{titleOfAttr: 'align', actionOfAttr:'Задає вирівнювання вмісту тега <div> .'},{titleOfAttr: 'title', actionOfAttr:'Додає підказку до вмісту.'}];
let tagDiv=new Tag(
    'div',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',
    attrsTagDiv
    );

let attrsTagH1=[{titleOfAttr: 'align', actionOfAttr:'Определяет выравнивание заголовка'}];
let tagH1=new Tag(
    'h1',
    'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня.',
    attrsTagH1
    );

let attrsTagSpan=[{titleOfAttr: 'class', actionOfAttr:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},{titleOfAttr: 'id', actionOfAttr:'Указывает имя стилевого идентификатора.'}];
let tagSpan=new Tag(
    'span',
    'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль',
    attrsTagSpan
    );

let attrsTagInput=[{titleOfAttr: 'accept', actionOfAttr:'Встановлює фільтр на типи файлів, які ви можете відправити через поле завантаження файлів.'},{titleOfAttr: 'border', actionOfAttr:'Товщина рамки навколо зображення.'}];
let tagInput=new Tag('input','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',attrsTagInput);

let attrsTagForm=[{titleOfAttr: 'accept-charset', actionOfAttr:'Встановлює кодування, в якій сервер може приймати та обробляти дані.'},{titleOfAttr: 'action', actionOfAttr:'Адреса програми або документа, який обробляє дані форми.'}];
let tagForm=new Tag('form','Тег <form> встановлює форму на веб-сторінці. Форма призначена для обміну даними між користувачем і сервером',attrsTagForm);

let attrsTagOption=[{titleOfAttr: 'disabled', actionOfAttr:'Заблокувати для доступу елемент списку.'},{titleOfAttr: 'label', actionOfAttr:'Вказівка ​​мітки пункту списку.'}];
let tagOption=new Tag('option','Тег <option> визначає окремі пункти списку, що створюється за допомогою контейнера <select> .',attrsTagOption);

let attrsTagSelect=[{titleOfAttr: 'autofocus', actionOfAttr:'Встановлює, що список отримує фокус після завантаження сторінки.'},{titleOfAttr: 'multiple', actionOfAttr:'Дозволяє одночасно вибирати відразу кілька елементів списку.'}];
let tagSelect=new Tag('select','Тег <select> дозволяє створити елемент інтерфейсу у вигляді списку, а також список з одним або множинним вибором, як показано далі. Кінцевий вигляд залежить від використання атрибута size тега <select> , який встановлює висоту списку.',attrsTagSelect);
// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
class Tags{
    constructor(titleOfTag, action, attrs){
        this.titleOfTag=titleOfTag;
        this.action=action;
        this.attrs=attrs;
    }
}
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

let attrsTagA=[{titleOfAttr: 'accesskey', actionOfAttr:'Активация ссылки с помощью комбинации клавиш.'},{titleOfAttr: 'href', actionOfAttr:'Задает адрес документа, на который следует перейти.'}];
let tagA=new Tags(
    'a',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.',
    attrsTagA
    );

let attrsTagDiv=[{titleOfAttr: 'align', actionOfAttr:'Задає вирівнювання вмісту тега <div> .'},{titleOfAttr: 'title', actionOfAttr:'Додає підказку до вмісту.'}];
let tagDiv=new Tags(
    'div',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.',
    attrsTagDiv
    );

let attrsTagH1=[{titleOfAttr: 'align', actionOfAttr:'Определяет выравнивание заголовка'}];
let tagH1=new Tags(
    'h1',
    'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня.',
    attrsTagH1
    );

let attrsTagSpan=[{titleOfAttr: 'class', actionOfAttr:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},{titleOfAttr: 'id', actionOfAttr:'Указывает имя стилевого идентификатора.'}];
let tagSpan=new Tags(
    'span',
    'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль',
    attrsTagSpan
    );

let attrsTagInput=[{titleOfAttr: 'accept', actionOfAttr:'Встановлює фільтр на типи файлів, які ви можете відправити через поле завантаження файлів.'},{titleOfAttr: 'border', actionOfAttr:'Товщина рамки навколо зображення.'}];
let tagInput=new Tags('input','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',attrsTagInput);

let attrsTagForm=[{titleOfAttr: 'accept-charset', actionOfAttr:'Встановлює кодування, в якій сервер може приймати та обробляти дані.'},{titleOfAttr: 'action', actionOfAttr:'Адреса програми або документа, який обробляє дані форми.'}];
let tagForm=new Tags('form','Тег <form> встановлює форму на веб-сторінці. Форма призначена для обміну даними між користувачем і сервером',attrsTagForm);

let attrsTagOption=[{titleOfAttr: 'disabled', actionOfAttr:'Заблокувати для доступу елемент списку.'},{titleOfAttr: 'label', actionOfAttr:'Вказівка ​​мітки пункту списку.'}];
let tagOption=new Tags('option','Тег <option> визначає окремі пункти списку, що створюється за допомогою контейнера <select> .',attrsTagOption);

let attrsTagSelect=[{titleOfAttr: 'autofocus', actionOfAttr:'Встановлює, що список отримує фокус після завантаження сторінки.'},{titleOfAttr: 'multiple', actionOfAttr:'Дозволяє одночасно вибирати відразу кілька елементів списку.'}];
let tagSelect=new Tags('select','Тег <select> дозволяє створити елемент інтерфейсу у вигляді списку, а також список з одним або множинним вибором, як показано далі. Кінцевий вигляд залежить від використання атрибута size тега <select> , який встановлює висоту списку.',attrsTagSelect);

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
let objCar={
    model:'tesla',
    maker:'dsfgg',
    year:2010,
    maxSpeed:220,
    engineCapacity:2.6,
    drive:function () {
        console.log("їдемо зі швидкістю " + this.maxSpeed + " km на годину");
    },
    info: function () {
        console.log('model: '+ this.model);
        console.log('maker: '+this.maker);
        console.log('year: '+this.year);
        console.log('max speed: '+this.maxSpeed);
        console.log('engine capacity: '+this.engineCapacity);
    },
    increaseMaxSpeed: function (newSpeed) {
        this.maxSpeed=newSpeed;
    },
    changeYear: function (newValue){
        this.year=newValue;
    },
    addDriver:function (driver){
        this.driver=driver;
    }
}
// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
function Car(model,maker,year,maxSpeed,engineCapacity){
    this.model=model;
    this.maker=maker;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.engineCapacity=engineCapacity;
    this.drive=function () {
        console.log("їдемо зі швидкістю " + this.maxSpeed + " km на годину");
    };
    this.info= function () {
        console.log('model: '+ this.model);
        console.log('maker: '+this.maker);
        console.log('year: '+this.year);
        console.log('max speed: '+this.maxSpeed);
        console.log('engine capacity: '+this.engineCapacity);
    };
    this.increaseMaxSpeed= function (newSpeed) {
        this.maxSpeed=newSpeed;
    };
    this.changeYear= function (newValue){
        this.year=newValue;
    };
    this.addDriver=function (driver){
        this.driver=driver;
    }
}

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
class CreateCar{
    constructor(model,maker,year,maxSpeed,engineCapacity){
        this.model=model;
        this.maker=maker;
        this.year=year;
        this.maxSpeed=maxSpeed;
        this.engineCapacity=engineCapacity;
    }
    info() {
        console.log('model: '+ this.model);
        console.log('maker: '+this.maker);
        console.log('year: '+this.year);
        console.log('max speed: '+this.maxSpeed);
        console.log('engine capacity: '+this.engineCapacity);
    };
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed=newSpeed;
    };
    changeYear(newValue){
        this.year=newValue;
    };
    addDriver(driver){
        this.driver=driver;
    }
}

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
class Cinderella {
    constructor(name,age,footSize){
        this.name=name;
        this.age=age;
        this.footSize=footSize;
    }   
}
let cinderella1=new Cinderella('Halia',32,38);
let cinderella2=new Cinderella('Anna',28,38.6);
let cinderella3=new Cinderella('Marta',20,37);
let cinderella4=new Cinderella('Vika',22,37.7);
let cinderella5=new Cinderella('Katya',42,40);
let cinderella6=new Cinderella('Olena',26,36.7);
let cinderella7=new Cinderella('Yulia',19,37.9);
let cinderella8=new Cinderella('Olesia',27,37.3);
let cinderella9=new Cinderella('Karina',7,22);
let cinderella10=new Cinderella('Khrystya',16,35);
let allCinderellas=[];
allCinderellas.push(cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10);
console.log(allCinderellas);
class Prince{
    constructor(name,age,shoeSize){
        this.name=name;
        this.age=age;
        this.shoeSize=shoeSize;
    }
}
let prince=new Prince('Roman',20,35);
for (let i = 0; i < allCinderellas.length; i++) {
    if (allCinderellas[i].footSize===prince.shoeSize) {
        console.log('Ура!!! Я зннайшов свою принцесу. Її звати ' +allCinderellas[i].name+ ', вона має ' +allCinderellas[i].age+  ' років');
        break;
    }
}
// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
function Cinderella(name,age,footSize) {
    this.name=name;
    this.age=age;
    this.footSize=footSize;
}
let cinderella1=new Cinderella('Halia',32,38);
let cinderella2=new Cinderella('Anna',28,38.6);
let cinderella3=new Cinderella('Marta',20,37);
let cinderella4=new Cinderella('Vika',22,37.7);
let cinderella5=new Cinderella('Katya',42,40);
let cinderella6=new Cinderella('Olena',26,36.7);
let cinderella7=new Cinderella('Yulia',19,37.9);
let cinderella8=new Cinderella('Olesia',27,37.3);
let cinderella9=new Cinderella('Karina',7,22);
let cinderella10=new Cinderella('Khrystya',16,35);
let allCinderellas=[];
allCinderellas.push(cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10);
console.log(allCinderellas);
function Prince(name,age,shoeSize) {
    this.name=name;
    this.age=age;
    this.shoeSize=shoeSize;
    this.findCinderella=function (allCinderellas) {
        for (let i = 0; i < allCinderellas.length; i++) {
            if (allCinderellas[i].footSize===this.shoeSize) {
                console.log('Ура!!! Я зннайшов свою принцесу.');
                break;
            }
        }
    }
}
let prince=new Prince('Roman',20,35);
prince.findCinderella(allCinderellas);