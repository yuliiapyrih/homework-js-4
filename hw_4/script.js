// - створити функцію яка виводить масив
function printArray(array) {
    console.log(array);
}
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function randomNum(mass,size) {
    for (let i = 0; i < size; i++) {
        mass[i]=Math.floor(Math.random()*100);
    }
    printArray(mass);
}
// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function mixNum(x,y,z) {
    if (x<y) {
        if (x<z) {
            console.log(x);
            return x;  
        }
        else{
            console.log(z);
            return z;
        }
    }
    else{
        if (y<z) {
            console.log(y);
            return y;  
        }
        else{
            console.log(z);
            return z;
        }
    }
}
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function maxNum(x,y,z) {
    if (x>y) {
        if (x>z) {
            console.log(x);
            return x;  
        }
        else{
            console.log(z);
            return z;
        }
    }
    else{
        if (y>z) {
            console.log(y);
            return y;  
        }
        else{
            console.log(z);
            return z;
        }
    }
}
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function findNum() {
    let min=arguments[0];
    let max=arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i]<min) {
            min=arguments[i];
        }
        if (arguments[i]>max) {
            max=arguments[i];
        }
        
    }
    console.log(max);
    return min;
}
// - створити функцію яка повертає найбільше число з масиву
function findMax() {
    let max=arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i]>max) {
            max=arguments[i];
        }
    }
    return max;
}
// - створити функцію яка повертає найменьше число з масиву
function findNum() {
    let min=arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i]<min) {
            min=arguments[i];
        }
    }
    return min;
}
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function sumNum(array) {
    let sum=0;
    for (let i = 0; i < array.length; i++) {
        sum+=array[i];
    }
    return sum;
}
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticMean(array) {
    let sum=0;
    for (let i = 0; i < array.length; i++) {
        sum+=array[i];
    }
    sum/=array.length;
    return sum;
}
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
function lenghtObj(arrObj) {
    return arrObj.length;
}
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
function numObj(arrObj) {
    let numKeys=0;
    for (let i = 0; i < arrObj.length; i++) {
        let key=Object.keys(arrObj[i]);
        numKeys+=key.length;
    }
    return numKeys;
}
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
function sumNumIndex(arr1,arr2) {
    let resultArray=[];
    for (let i = 0; i < arr1.length; i++) {
        resultArray[i]=arr1[i]+arr2[i];
    }
    return resultArray;
}
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
function masNum(arr,i) {
    if (i>=arr.length-1 && i<0) {
        return NaN;
    }
    else{
        let temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
    }
}
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
function numZero(array) {
    let count=0;
    for (let i = array.length-1; i >=0; i--) {
        if (array[i]===0) {
            for (let j = i; j < array.length-1-count; j++) {
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
            count++;
        }
    }
    return array;
}
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function addBlock() {
    let blockWithText=document.createElement('div');
    blockWithText.innerHTML='Hello owu';
    document.body.appendChild(blockWithText);
}
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function addBlock(typeElem,text) {
    let blockWithText=document.createElement(typeElem);
    blockWithText.innerHTML=text;
    document.body.appendChild(blockWithText);
}
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let carsArray=[
    {model:'Acura',year:2000,color:'red'},
    {model:'Audi',year:2001,color:'yellow'},
    {model:'Bentley',year:2002,color:'silver'},
    {model:'BMW',year:2003,color:'cherry'},
    {model:'Bugatti',year:2004,color:'green'}
];
let blockCars=document.createElement('div');
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
function car(carsArray,blockCars) {
    for (let i = 0; i < carsArray.length; i++) {
        blockCars.innerHTML='model: '+carsArray[i].model+'<br> year: '+carsArray[i].year+'<br>color: '+ carsArray[i].color;
        document.body.appendChild(blockCars);
    }
}
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
let carBlock=document.createElement('div');
function carDiv(carsArray,carBlock) {
    for (let i = 0; i < carsArray.length; i++) {
        let qualityModel=document.createElement('div');
        let qualityYear=document.createElement('div');
        let qualityColor=document.createElement('div');
        qualityModel.innerHTML='model: '+carsArray[i].model;
        qualityYear.innerHTML='year: '+carsArray[i].year;
        qualityColor.innerHTML='color: '+ carsArray[i].color;
        carBlock.appendChild(qualityModel);
        carBlock.appendChild(qualityYear);
        carBlock.appendChild(qualityColor);
        document.body.appendChild(carBlock);
    }
}
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false}, 
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true}, 
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'}, 
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
    {user_id: 2, country: 'Poland', city: 'Krakow'}, 
    {user_id: 4, country: 'USA', city: 'Miami'}
];

function funcID(usersWithId,citiesWithId) {
    let usersWithCities=[];   
    for (let i = 0; i < usersWithId.length; i++) {
        for (let j = 0; j < citiesWithId.length; j++) {
            if (usersWithId[i].id===citiesWithId[j].user_id) {
                usersWithCities[i]=usersWithId[i];
                usersWithCities[i].address=citiesWithId[j];
            }
        }
    }
    return usersWithCities;
}

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
// "
function rule(rules) {
    let rulesDiv=document.createElement('div');
    for (let j = 0; j < rules.length; j++) {
        let childRulesDiv=document.createElement('div');
        let rulesTitle=document.createElement('h2');
        let rulesBody=document.createElement('p');
        rulesTitle.innerHTML=rules[j].title;
        rulesBody.innerHTML=rules[j].body;
        childRulesDiv.appendChild(rulesTitle);
        childRulesDiv.appendChild(rulesBody);
        rulesDiv.appendChild(childRulesDiv);
    }
}

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
let N=124;
while(N>1){
    N/=2;
}
if (N===1) {
    console.log('YES');
}
else{
    console.log('NO');
}
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
function deepCopy(obj) {
    if(typeof(obj) != "object") {
        return obj;
    }
    if(!obj) {
        return obj;
    }
    
    let objClone={};
    for(var i in obj) {
        if(obj.hasOwnProperty(i)) {
            objClone[i] = deepCopy(obj[i]);
        }
    }
    return r;
}
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========
let arr =[1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];
let arrFlat =arr.flat(2);
console.log(arrFlat);