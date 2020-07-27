// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
const someText=document.getElementById('textarea');
someText.value=localStorage.getItem('info');
someText.oninput=()=>{
    localStorage.setItem('info',someText.value);
}
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
let forma=document.forms.fullForm;
forma.myText1.value=localStorage.getItem('input1');
forma.myText1.onclick=()=>{
    localStorage.setItem('input1',forma.myText1.value);
}

forma.myText2.value=localStorage.getItem('input2');
forma.myText2.onclick=()=>{
    localStorage.setItem('input2',forma.myText2.value);
}

forma.text.value=localStorage.getItem('textarea');
forma.text.onclick=()=>{
    localStorage.setItem('textarea',forma.text.value);
}

if (localStorage.getItem('checkbox1')==='true') {
    forma.checkbox1.setAttribute('checked','checked');
}

forma.checkbox1.onclick=()=>{
    if (forma.checkbox1.checked) {
        forma.checkbox1.value='true';
        localStorage.setItem('checkbox1',forma.checkbox1.value);
    }
    else{
        forma.checkbox1.value='false';
        localStorage.setItem('checkbox1',forma.checkbox1.value);
    }
}

if (localStorage.getItem('checkbox2')==='true') {
    forma.checkbox2.setAttribute('checked','checked');
}

forma.checkbox2.onclick=()=>{
    if (forma.checkbox2.checked) {
        forma.checkbox2.value='true';
        localStorage.setItem('checkbox2',forma.checkbox2.value);
    }
    else{
        forma.checkbox2.value='false';
        localStorage.setItem('checkbox2',forma.checkbox2.value);
    }
}

if (localStorage.getItem('radio1')==='true') {
    forma.radio1.setAttribute('checked','checked');
}

forma.radio1.onclick=()=>{
    if (forma.radio1.checked) {
        forma.radio1.value='true';
        localStorage.setItem('radio1',forma.radio1.value);
    }
    else{
        forma.radio1.value='false';
        localStorage.setItem('radio1',forma.radio1.value);
    }
}

if (localStorage.getItem('radio2')==='true') {
    forma.radio2.setAttribute('checked','checked');
}

forma.radio2.onclick=()=>{
    if (forma.radio2.checked) {
        forma.radio2.value='true';
        localStorage.setItem('radio2',forma.radio2.value);
    }
    else{
        forma.radio2.value='false';
        localStorage.setItem('radio2',forma.radio2.value);
    }
}

forma.mySelect.value=localStorage.getItem('mySelect');
forma.mySelect.onclick=()=>{
    localStorage.setItem('mySelect',forma.mySelect.value);
}
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
let btnSave= document.getElementById('save');

let btnGo=document.createElement('button');
let btnBack=document.createElement('button');
let divHistory=document.getElementById('btnBlock');
let text=document.getElementById('history');

let history=[];
if (localStorage.getItem('history')!==null && history.length !==1){
    history=JSON.parse(localStorage.getItem('history'));
    text.value=history[history.length-1];
    createBtn(history.length);
}


btnSave.onclick=()=>{
    if (localStorage.getItem('history')===null) {
        history[0]=text.value;
        localStorage.setItem('history',JSON.stringify(history));
    }else{
        createBtn('Yes');
        history=JSON.parse(localStorage.getItem('history'));
        history.push(text.value);
        localStorage.setItem('history',JSON.stringify(history));
    } 
}

function createBtn(size) {
    if (size>=2 || size==='Yes') {
        btnGo.innerHTML='->';
        btnBack.innerHTML='<-';
        btnGo.style.visibility='hidden';
        divHistory.appendChild(btnBack);
        divHistory.appendChild(btnGo);
    }
}
function check(history) {
    for (let i = 0; i < history.length; i++) {
        if (text.value===history[i]) {
            return i;
        }
    }
}
btnGo.onclick=()=>{
    history=JSON.parse(localStorage.getItem('history'));
    let index=check(history);
    if (index+1===history.length-1) {
        btnGo.style.visibility='hidden';
        text.value=history[index+1];
    }else{  
        text.value=history[index+1];
    }
    btnBack.style.visibility='visible';
}
btnBack.onclick=()=>{
    history=JSON.parse(localStorage.getItem('history'));
    let index=check(history);
    if (index-1===0) {
        btnBack.style.visibility='hidden';
        text.value=history[index-1];
    }else{
        text.value=history[index-1];
    }
    btnGo.style.visibility='visible';
}

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
let userForm=document.createElement('form');
let fio=document.createElement('input');
let number=document.createElement('input');
let email=document.createElement('input');
let firm=document.createElement('input');
let office=document.createElement('input');
let date=document.createElement('input');
let save=document.createElement('input');
userForm.id='userForm';
fio.type='text';
fio.name='fioUser';
number.type='text';
number.name='number';
email.type='email';
email.name='email';
firm.type='text';
firm.name='firm';
office.type='text';
office.name='office';
date.type='date';
date.name='date';
save.type='submit';
save.name='submit';
save.value='Save';
userForm.appendChild(fio); 
userForm.appendChild(number);
userForm.appendChild(email);
userForm.appendChild(firm);
userForm.appendChild(office);
userForm.appendChild(date);
userForm.appendChild(save);
document.body.appendChild(userForm);
let allUsers=document.createElement('div');
let userBook=localStorage.getItem('userBook');
console.log(userBook);
if (userBook===null) {
    userBook=[];
    localStorage.setItem('userBook',JSON.stringify(userBook));
}else{
    userBook = JSON.parse(localStorage.getItem('userBook'));
    createDivUsers();
}


save.onclick=(ev)=>{
    ev.preventDefault();
    let user={name:fio.value,number:number.value,email:email.value,firm:firm.value,office:office.value,date:date.value};
    userBook.push(user);
    localStorage.setItem('userBook',JSON.stringify(userBook));
    createDivUsers();
}
function createDivUsers() {
    allUsers.innerHTML='';
    userBook = JSON.parse(localStorage.getItem('userBook'));
    for (let i = 0; i < userBook.length; i++) {
        let userDiv=document.createElement('div');
        userDiv.innerHTML='Name: '+userBook[i].name
                        +';<br> Number: '+userBook[i].number
                        +';<br> Email: '+userBook[i].email
                        +';<br> Firm: '+userBook[i].firm
                        +';<br> Office: '+userBook[i].office
                        +';<br> Date: '+userBook[i].date+'.';
        let btnDelete =document.createElement('button');
        let btnEdit =document.createElement('button');
        btnDelete.innerHTML='Delete';
        btnEdit.innerHTML='Edit';

        userDiv.appendChild(btnDelete);
        userDiv.appendChild(btnEdit);
        allUsers.appendChild(userDiv);

        btnDelete.onclick=()=>{
            userBook.splice(i,1);
            allUsers.innerHTML='';
            localStorage.setItem('userBook',JSON.stringify(userBook));
            createDivUsers();
        }
        btnEdit.onclick=()=>{
            editForm(userBook,i);
        }
    }
}
function editForm(userBook,index) {
    let userForm=document.createElement('form');
    let fio=document.createElement('input');
    let number=document.createElement('input');
    let email=document.createElement('input');
    let firm=document.createElement('input');
    let office=document.createElement('input');
    let date=document.createElement('input');
    let saveEdit=document.createElement('input');
    userForm.id='userFormEdit';
    fio.type='text';
    fio.name='fioUser';
    number.type='text';
    number.name='number';
    email.type='email';
    email.name='email';
    firm.type='text';
    firm.name='firm';
    office.type='text';
    office.name='office';
    date.type='date';
    date.name='date';
    saveEdit.type='submit';
    saveEdit.name='submit';
    saveEdit.value='Save';
    userForm.appendChild(fio); 
    userForm.appendChild(number);
    userForm.appendChild(email);
    userForm.appendChild(firm);
    userForm.appendChild(office);
    userForm.appendChild(date);
    userForm.appendChild(saveEdit);
    document.body.appendChild(userForm);
    fio.value=userBook[index].name;
    number.value=userBook[index].number;
    email.value=userBook[index].email;
    firm.value=userBook[index].value;
    office.value=userBook[index].office;
    date.value=userBook[index].value;
    saveEdit.onclick=()=>{
        userBook[index]={name:fio.value,number:number.value,email:email.value,firm:firm.value,office:office.value,date:date.value};
        localStorage.getItem('userBook',JSON.stringify(userBook));
        userForm.innerHTML='';
        localStorage.setItem('userBook',JSON.stringify(userBook));
        createDivUsers();
    }
}

document.body.appendChild(allUsers);