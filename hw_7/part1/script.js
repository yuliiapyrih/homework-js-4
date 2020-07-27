// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let textID=document.getElementById('text');
textID.onclick=()=>{
    textID.style.display='none';
}
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn=document.querySelector('#btn');
btn.onclick=()=>{
    btn.style.display='none';
}
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let age = document.forms.formAge;
age.ageBtn.onclick=(ev)=>{
    ev.preventDefault();
    const input=age.ageUser.value;
    age.ageUser.value='';
    if (input<18) {
        alert('Ви не можете знаходитися на цьому сайті!!!');
    }
    //console.log(input);
}
// - Создайте меню, которое раскрывается/сворачивается при клике
let menu=document.querySelector('#menu');
let title=menu.querySelector('#title');
menu.classList.add('inTitle');
title.onclick=()=>{
    menu.classList.toggle('inTitle');
};

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
let comments=[
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'Создать', body:'Создать список комментариев , пример объекта коментария'},
    {title : 'Вывести', body:'Вывести список комментариев в документ, каждый в своем блоке.'},
    {title : 'Добавьте', body:'Добавьте каждому комментарию по кнопке для сворачивания его body.'}
]
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let listUl=document.createElement('ul');

for (const com of comments) {
    let listLi=document.createElement('li');
    let listH1=document.createElement('h1');
    let listP=document.createElement('p');
    listH1.innerHTML=com.title +'<button type="button">Згорнути</button>';
    listP.innerHTML=com.body;
    listP.classList.add('content');
    listLi.appendChild(listH1);
    listLi.appendChild(listP);
    listUl.appendChild(listLi);
}
document.body.appendChild(listUl);
let contentP=document.querySelectorAll('ul p');
let btnList=document.querySelectorAll('ul button');
for (let i = 0; i < btnList.length; i++) {
    btnList[i].onclick=()=>{
       contentP[i].classList.toggle('content');
   }
}
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let forma1=document.createElement('form');
let forma2=document.createElement('form');
let input11=document.createElement('input');
let input12=document.createElement('input');
let input21=document.createElement('input');
let input22=document.createElement('input');
forma1.appendChild(input11);
forma1.appendChild(input12);
forma2.appendChild(input21);
forma2.appendChild(input22);
document.body.appendChild(forma1);
document.body.appendChild(forma2);
forma1.name="forma1";
forma2.name="forma2";
input11.type="text";
input11.name='someText11';
input12.type="text";
input12.name="someText12";
input21.type="text";
input21.name='someText21';
input22.type="text";
input22.name="someText22";
let btnInfo=document.createElement('button');
btnInfo.type="button";
btnInfo.id="btnInfo";
btnInfo.innerHTML='Зібрати всю інформацію';
document.body.appendChild(btnInfo);
let infoWithForm1= document.forms.forma1;
let infoWithForm2= document.forms.forma2;

let infoBtn=document.getElementById('btnInfo');
infoBtn.onclick=()=>{
    let allInfo=[];
    allInfo.push(infoWithForm1.someText11.value,infoWithForm1.someText12.value,infoWithForm2.someText21.value,infoWithForm2.someText22.value);
    console.log(allInfo);
    infoWithForm1.someText11.value='';
    infoWithForm2.someText21.value='';
    infoWithForm1.someText12.value='';
    infoWithForm2.someText22.value='';
}

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
function createTable(row,cell,tableElem,textInTable) {
    for (let i = 0; i < row; i++) {
        let rowTable=document.createElement('tr');
        for (let j = 0; j < cell; j++) {
            let cellTable=document.createElement('td');
            cellTable.innerHTML=textInTable;
            rowTable.appendChild(cellTable);
        }
        tableElem.appendChild(rowTable);
    }
    document.body.appendChild(tableElem);
}
let tableElem=document.createElement('table');

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let myForm=document.createElement('form');
let numberRow=document.createElement('input');
let numberCol=document.createElement('input');
let textInTable=document.createElement('input');
let btnMyForm=document.createElement('input');
myForm.name="myForm";
numberRow.type="text";
numberRow.name='numberRow';
numberCol.type="text";
numberCol.name="numberCol";
textInTable.type="text";
textInTable.name='textInTable';
btnMyForm.type="submit";
btnMyForm.name="btnMyForm";
btnMyForm.value="OK";
myForm.appendChild(numberRow);
myForm.appendChild(numberCol);
myForm.appendChild(textInTable);
myForm.appendChild(btnMyForm);
document.body.appendChild(myForm);
btnMyForm.onclick=(ev)=>{
    ev.preventDefault();
    createTable(numberRow.value,numberCol.value,tableElem,textInTable.value);
    numberRow.value='';
    numberCol.value='';
    textInTable.value='';
}

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let divImg=document.createElement('div');
let image=document.createElement('img');
let btnImg1=document.createElement('button');
let btnImg2=document.createElement('button');
btnImg1.innerHTML='<-';
btnImg2.innerHTML='->';
divImg.appendChild(image);
divImg.appendChild(btnImg1);
divImg.appendChild(btnImg2);
document.body.appendChild(divImg);
let imgSrc=['homer.png','Marge.png','liza.png','bart.png','Maggie.png'];
let indexImg=0;
image.src=imgSrc[indexImg];
btnImg2.onclick=()=>{
    if (indexImg+1>imgSrc.length-1) {
        indexImg=0;
    }else{
        indexImg+=1;
    }
    image.src=imgSrc[indexImg];
}

btnImg1.onclick=()=>{
    if (indexImg-1<0) {
        indexImg=imgSrc.length-1;
    }else{
        indexImg-=1;
    }
    image.src=imgSrc[indexImg];
}
// - Сворити масив не цензцрних слів.
let wordNan=['Сворити', 'масив','не', 'цензурних','слів'];
// Сворити інпут текстового типу.
let formWord=document.createElement('form');
let textInput=document.createElement('input');
let submitInput=document.createElement('input');
formWord.name='formWord';
textInput.type="text";
textInput.name="textInput";
submitInput.type="submit";
submitInput.name="submitInput";
submitInput.value="Перевірити";
formWord.appendChild(textInput);
formWord.appendChild(submitInput);
document.body.appendChild(formWord);
// submitInput.onclick=(ev)=>{
//     ev.preventDefault();
//     if (wordNan.includes(textInput.value)) {
//         alert('Так не можна!!!');
//     }
//     textInput.value='';
// }
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
submitInput.onclick=(ev)=>{
    ev.preventDefault();
    for (const word of wordNan) {
        if (textInput.value.includes(word)) {
            alert('Так не можна!!!');
        }
    }
    textInput.value='';
}