function userCard(number) {

    let cardInfo={
        balance:100,
        transactionLimit: 100,
        historyLogs:[],
        key: number
    }

    function getCardOptions() {
        return cardInfo;
    }

    function putCredits(addMoney) {
        let newHistory={
            operationType:'Received credits',
            credits: addMoney,
            operationTime: new Date()
        }
        cardInfo.historyLogs.push(newHistory);
        cardInfo.balance+=addMoney;
    }

    function takeCredits(subtractMoney) {
        if (subtractMoney<cardInfo.balance && subtractMoney<cardInfo.transactionLimit) {
            let newHistory={
                operationType:'Withdrawal of credits',
                credits: subtractMoney,
                operationTime: new Date()
            }
            cardInfo.historyLogs.push(newHistory);
            cardInfo.balance-=subtractMoney; 
        } else {
            console.error('Ви перевищили ліміт, або у Вас недостатньо коштів');
        }   
    }

    function setTransactionLimit(newLimit) {
        let newHistory={
            operationType:'Transaction limit change',
            credits: newLimit,
            operationTime: new Date()
        }
        cardInfo.historyLogs.push(newHistory);
        cardInfo.transactionLimit=newLimit;
    }

    function transferCredits(credits,otherCard) {
        newCredits=credits+credits*0.005;
        takeCredits(newCredits);
        otherCard.putCredits(credits);
    }
    return{
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
}

class UserAccount{
    constructor(name){
        this.name=name;
        this.myCard=[];
        this.key=0;
    }
    addCard(){
        if (this.myCard.length<=3) {
            let newCard=userCard(++this.key);
            this.myCard.push(newCard);
        } else {
            console.error('Перевищено ліміт кількості карт');
        }
    }
    getCardByKey(keyCard){
        return this.myCard[keyCard-1];
    }
}
let user = new UserAccount('Bob');
user.addCard()
user.addCard()
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions()); 
console.log(card2.getCardOptions());

// Необхіжно реалізувати друкарську машинку.
// У вас є інпут. Ви в нього ввожите якусь слово і тицькаєте кнопку "друкувати".

// Після того як ви тикнули кнопку вам необхідно запустити функцію яка буде друкувтаи на строніці то, шо ви ввели по одній букві з рандомною затримкою від 0.1 до 0.5 секунд. 
// Тим самим симулюючи друкування цього тексту реальною людиною.
// НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !

let forma=document.forms.myForm;

function oneWord(word) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(word)
        },Math.floor(Math.random()*400+100))
    })
}
async function print(str) {
    for (let i = 0; i < str.length; i++) {
        let word=await oneWord(str[i]);
        document.write(word);
    }
}
forma.submit.onclick=(ev)=>{
    ev.preventDefault();
    print(forma.someText.value)
}

