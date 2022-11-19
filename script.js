let amountDiv =document.getElementById('amount');
let balanceDiv= document.getElementById('balance')
class bank{
  constructor(balance){
    this.balance= balance
  }
 
}

var withdraw = () => {
    let amount=Number(amountDiv.value)
    if(amount>bankObj1.balance)
    { 
      //console.log(`Your acc has money less than ${amount}`)
      balanceDiv.innerText=`Your Account has money less than ${amount}! Balance is :${bankObj1.balance}`
      return;
    }
    bankObj1.balance-=amount
    balanceDiv.innerText= `Balance: ${bankObj1.balance}`
    //console.log({'balance':this.balance})
}

var deposit = () => {
    let amount=Number(amountDiv.value)
   bankObj1.balance+=amount
   balanceDiv.innerText= `Balance: ${bankObj1.balance}`
   // console.log({'balance':this.balance})
}
var bankObj1= new bank(0)



