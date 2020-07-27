// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let myFormWithCheckBox=document.createElement('form');
let checkbox1=document.createElement('input');
let checkbox2=document.createElement('input');
let checkbox3=document.createElement('input');
checkbox1.type="checkbox";
checkbox2.type="checkbox";
checkbox3.type="checkbox";
checkbox1.name='filter1';
checkbox2.name='filter2';
checkbox3.name='filter3';
myFormWithCheckBox.name="myFormWithCheckBox";
myFormWithCheckBox.appendChild(checkbox1);
myFormWithCheckBox.appendChild(checkbox2);
myFormWithCheckBox.appendChild(checkbox3);
document.body.appendChild(myFormWithCheckBox);

checkbox1.onclick=()=>{
    let userStatus=usersWithAddress.filter((user)=>{
        return user.status===false
    });
    for (const user of userStatus) {
        let userBlock= document.createElement('div');
        userBlock.innerHTML='id: '+user.id+'<br> name: '+user.name+'<br> age: '+user.age+ '<br> status: '+user.status+'<br> address: <br>city: '+user.address.city+'<br> street: '+user.address.street+'<br> number:'+user.address.number;
        document.body.appendChild(userBlock);
    }
}

checkbox2.onclick=()=>{
    let userAge=usersWithAddress.filter((user)=>{
        return user.age>=29;
    });
    for (const user of userAge) {
        let userBlock= document.createElement('div');
        userBlock.innerHTML='id: '+user.id+'<br> name: '+user.name+'<br> age: '+user.age+ '<br> status: '+user.status+'<br> address: <br>city: '+user.address.city+'<br> street: '+user.address.street+'<br> number:'+user.address.number;
        document.body.appendChild(userBlock);
    }
}

checkbox3.onclick=()=>{
    let userCity=usersWithAddress.filter((user)=>{
        return user.address.city==='Kyiv';
    });
    for (const user of userCity) {
        let userBlock= document.createElement('div');
        userBlock.innerHTML='id: '+user.id+'<br> name: '+user.name+'<br> age: '+user.age+ '<br> status: '+user.status+'<br> address: <br>city: '+user.address.city+'<br> street: '+user.address.street+'<br> number:'+user.address.number;
        document.body.appendChild(userBlock);
    }
}
