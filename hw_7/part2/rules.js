// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
let bodys=document.getElementsByTagName('body');
bodys[0].style.display='flex';

let allTitle=document.getElementsByTagName('h2');
let listRules=document.createElement('ul');
for (const title of allTitle) {
    let rule=document.createElement('li');
    let ruleHref=document.createElement('a');
    ruleHref.innerHTML=title.innerText;
    rule.appendChild(ruleHref);
    listRules.appendChild(rule);
}
listRules.style.listStyleType='none';
let allA=document.getElementsByTagName('a');
document.getElementById('content').appendChild(listRules);
for (let i = 0; i < allA.length; i++) {
    allA[i].setAttribute('href','#rule'+i);
    allTitle[i].id='rule'+i;
}