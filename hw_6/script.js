// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let numbers=[23,6,1,40,-64,2,22,-55,3.6,23,-4,3.5,-123,67,-35.8,64,12,4,-5,90];
let sortNumb1=numbers.sort((num1,num2)=>(num1-num2));
console.log(sortNumb1);

let sortNumb2=numbers.sort((num1,num2)=>(num2-num1));
console.log(sortNumb2);

let filterNum1=numbers.filter((num)=>(num%3===0));
console.log(filterNum1);

let filterNum2=numbers.filter((num)=>(num%10===0));
console.log(filterNum2);

numbers.forEach((value)=>{
    console.log(value);
});

let mapNumb=numbers.map((value)=>(value*3));
console.log(mapNumb);
// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let words=['создать', 'массив', 'со', 'словами','элементов','отсортировать', 'его','алфавиту', 'нисходящем' ,'порядке','котором', 'все', 'значения', 'будут', 'знаком','конце'];

let sortWords1=words.sort((word1,word2)=>{
    if (word1<word2) {
        return -1;
    }
    return 1;
});
console.log(sortWords1);

let sortWords2=words.sort((word1,word2)=>{
    if (word1>word2) {
        return -1;
    }
    return 1;
});
console.log(sortWords2);

let filterWords=words.filter((word)=>{
    return word.length<4;
});
console.log(filterWords);

let mapWords=words.map((word)=>{
    return word+'!';
});
console.log(mapWords);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
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

let usersSortAge1=users.sort((user1,user2)=>{
    return user1.age-user2.age;
});
console.log(usersSortAge1);

let usersSortAge2=users.sort((user1,user2)=>{
    return user2.age-user1.age;
});
console.log(usersSortAge2);

let usersSortName1=users.sort((user1,user2)=>{
    return user1.name.length-user2.name.length;
});
console.log(usersSortName1);

let usersSortName2=users.sort((user1,user2)=>{
    return user2.name.length-user1.name.length;
});
console.log(usersSortName2);
let usersWithId=users;
usersWithId.map((value,index)=>{
    return value.id=index+ Math.floor(Math.random()*11);
});
console.log(usersWithId);

usersWithId.sort((id1,id2)=>{
    return id1.id-id2.id;
});
console.log(usersWithId);

// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком
function calculatorWithTwoNumbers(x, y, operator) {
    if (operator==='+') {
        return x+y;
    }
    if (operator==='*') {
        return x*y;
    }
    if (operator==='-') {
        return x-y;
    }
    if (operator==='/') {
        return x/y;
    }
}

function calculatorWithThreeNumbers(x,y,z,operator1,operator2) {
    let result=0;
    if (operator1==='*') {
        result=x*y;
        return calculatorWithTwoNumbers(result,z,operator2);
    } 
    if (operator1==='/') {
        result=x*y;
        return calculatorWithTwoNumbers(result,z,operator2);
    } 
    if (operator2==='*') {
        result=y*z;
        return calculatorWithTwoNumbers(x,result,operator1);
    } 
    if (operator2==='/') {
        result=y*z;
        return calculatorWithTwoNumbers(x,result,operator1);
    } 
}
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв

let cars = [ 
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} 
];

let filterCarVolumeThree=cars.filter((car)=>{
    return car.volume>3;
});
console.log(filterCarVolumeThree);

let filterCarVolumeTwo=cars.filter((car)=>{
    return car.volume===2;
});
console.log(filterCarVolumeTwo);

let filterCarProducer=cars.filter((car)=>{
    return car.producer==='mercedes';
});
console.log(filterCarProducer);

let filterCarProducerAndVolume1=cars.filter((car)=>{
    return car.producer==='mercedes' && car.volume>3;
});
console.log(filterCarProducerAndVolume1);

let filterCarProducerAndVolume2=cars.filter((car)=>{
    return car.producer==='subaru' && car.volume>3;
});
console.log(filterCarProducerAndVolume2);

let filterCarPower=cars.filter((car)=>{
    return car.power>300;
});
console.log(filterCarPower);

let filterCarPowerAndProducer=cars.filter((car)=>{
    return car.producer==='subaru' && car.power>300;
});
console.log(filterCarPowerAndProducer);

let filterCarEngine=cars.filter((car)=>{
    return car.engine[0]==='e' && car.engine[1]==='j';
});
console.log(filterCarEngine);

let filterCarEngineAndPowerAndProducer=cars.filter((car)=>{
    return car.engine[0]==='e' && car.engine[1]==='j'&& car.power>300 && car.producer==='subaru';
});
console.log(filterCarEngineAndPowerAndProducer);

let filterCarProducerAndVolume3=cars.filter((car)=>{
    return car.producer==='mercedes' && car.volume<3;
});
console.log(filterCarProducerAndVolume3);

let filterCarPowerAndVolume=cars.filter((car)=>{
    return car.power>250 && car.volume<2;
});
console.log(filterCarPowerAndVolume);

let filterCarPowerAndProducer1=cars.filter((car)=>{
    return car.producer==='bmw' && car.power>250;
});
console.log(filterCarPowerAndProducer1);
// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
];

let sortUsersId1=usersWithAddress.sort((user1,user2)=>{
    return user2.id-user1.id;
});
console.log(sortUsersId1);

let sortUsersId2=usersWithAddress.sort((user1,user2)=>{
    return user1.id-user2.id;
});
console.log(sortUsersId2);

let sortUsersAge1=usersWithAddress.sort((user1,user2)=>{
    return user1.age-user2.age;
});
console.log(sortUsersAge1);

let sortUsersAge2=usersWithAddress.sort((user1,user2)=>{
    return user2.age-user1.age;
});
console.log(sortUsersAge2);

let sortUsersName1=usersWithAddress.sort((user1,user2)=>{
    if (user1.name<user2.name) {
        return -1;
    }
    return 1;
});
console.log(sortUsersName1);

let sortUsersName2=usersWithAddress.sort((user1,user2)=>{
    if (user1.name>user2.name) {
        return -1;
    }
    return 1;
});
console.log(sortUsersName2);

let sortUsersStreet=usersWithAddress.sort((user1,user2)=>{
    if (user1.address.street<user2.address.street) {
        return -1;
    }
    return 1;
});
console.log(sortUsersStreet);

let sortUsersNumber=usersWithAddress.sort((user1,user2)=>{
    return user1.address.number-user2.address.number;
});
console.log(sortUsersNumber);

let filterUsersAge=users.filter((user)=>{
    return user.age<30;
});
console.log(filterUsersAge);

let filterUsersStatus=users.filter((user)=>{
    return user.status===false;
});
console.log(filterUsersStatus);

let filterUsersStatusAndAge=users.filter((user)=>{
    return user.status===false && user.age<30;
});
console.log(filterUsersStatusAndAge);

let filterUsersHouseNumber=users.filter((num)=>{
    return num.address.number % 2===0;
});
console.log(filterUsersHouseNumber);
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let carsWithDriver = [ 
    {marka:"subaru",price: 123456,year: 2010,power: 400,driver:{name:'yulia',age:33,experience:9}}, 
    {marka:"audi",price: 87623,year: 2007,power: 250,driver:{name:'bohdan',age:26,experience:6}}, 
    {marka:"vaz",price: 94842,year: 2011,power: 300,driver:{name:'katya',age:30,experience:10}}, 
    {marka:"tesla",price: 8373,year: 1998,power: 140,driver:{name:'max',age:23,experience:5}}, 
    {marka:"volvo",price: 235789,year: 2014,power: 200,driver:{name:'lana',age:22,experience:3}}, 
    {marka:"golf",price: 49363,year: 2014,power: 165,driver:{name:'andrew',age:48,experience:15}}, 
    {marka:"bmw",price: 76554,year: 2013,power: 120,driver:{name:'vika',age:38,experience:12}}, 
    {marka:"bentley",price: 234585,year: 2010, power: 120,driver:{name:'bran',age:24,experience:3}}, 
    {marka:"bugatti",price: 864832,year: 2009,power: 350,driver:{name:'vova',age:20,experience:2}}, 
    {marka:"cadilac",price: 833235,year: 2012,power: 180,driver:{name:'lina',age:35,experience:8}}, 
    {marka:"mercedes",price: 45678,year: 1990,power: 180,driver:{name:'roman',age:34,experience:7}}, 
    {marka:"ford",price: 97555,year: 2017,power: 400,driver:{name:'arsen',age:29,experience:11}}, 
    {marka:"ferrari",price: 77777,year: 2017,power: 230,driver:{name:'rostik',age:40,experience:14}} 
];

let newCars=[];
for (let i = 0; i < carsWithDriver.length/2; i++) {
    newCars.push(carsWithDriver[i]);
    newCars[i].power+=newCars[i].power*0.1; 
}

let driver =[
    {name:'vika',age:38,experience:12}, 
    {name:'bran',age:24,experience:3}, 
    {name:'vova',age:20,experience:2}, 
    {name:'lina',age:35,experience:8}, 
    {name:'roman',age:34,experience:7}, 
    {name:'arsen',age:29,experience:11}, 
    {name:'rostik',age:40,experience:14}
];
for (let i = 0; i < newCars.length; i++) {
    newCars[i].driver=driver[i];
}
console.log(newCars);
for (let i = 0; i < newCars.length; i+=2) {
    newCars[i].power+=newCars[i].power*0.1;
    newCars[i].price+=newCars[i].price*0.05;
}
console.log(newCars);

for (let i = 0; i < newCars.length || i<carsWithDriver.length; i++) {
    if (newCars[i].driver.experience <5 && newCars[i].driver.age >25) {
        newCars[i].driver.experience+=1;
    }
    if (carsWithDriver[i].driver.experience<5&&carsWithDriver[i].driver.age>25) {
        carsWithDriver[i].driver.experience+=1;
    }
}
let sumPrice=carsWithDriver.reduce((a,b)=>{
    return a+b.price;
},0);
console.log(sumPrice);
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
let arr=[1, 2, 3, 4, 4, 4, 4, 7, 7, 9];
function findMaxMin(arr,key) {
    let minIndex=-1;
    let maxIndex=-1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===key) {
            minIndex=i;
            maxIndex=i;
            break;
        }
    }
    for (let j = minIndex+1; j < arr.length; j++) {
        if (arr[j]===key) {
            maxIndex=j;
        }else{
            break;
        }
    }
    console.log('MinIndex: '+ minIndex);
    console.log('MaxIndex: '+maxIndex);
};
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.


