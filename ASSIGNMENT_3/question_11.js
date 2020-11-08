function prac(){
  function BankAccount(accountNumber, accountHolderName, accountBalance){
    this.accountNumber=accountNumber;
    this.accountHolderName=accountHolderName;
    this.accountBalance=accountBalance;

}

var savings=new BankAccount(111,"Jake", 45000);
savings.isSalary=20000;
var current=new BankAccount(222,"Amy",38000);
current.odLimit=10000;

 savings.withdraw=function(amount){
     if(amount<this.accountBalance){
    var newAccountBalance=this.accountBalance-amount;
    this.accountBalance=newAccountBalance;
     }
     else{
         document.getElementById("one").innerHTML="Insufficient balance in saving account";
     }

 }
 savings.withdraw(5000);
 current.withdraw=function(amount){
    var newAccountBalance=this.accountBalance-amount;

     if(newAccountBalance>this.odLimit){
    this.accountBalance=newAccountBalance;
     }
    else{
        document.getElementById("three").innerHTML="Account balance of current account should not go below negative odLimt";
    }

}
current.withdraw(6000);
BankAccount.prototype.getCurrentBalance=function(){
    if(this.accountBalance>0){
    return this.accountBalance;
    }
}

document.getElementById("two").innerHTML="Account Balance in saving account is "+savings.getCurrentBalance();
document.getElementById("four").innerHTML="Account Balance in current account is "+current.getCurrentBalance();
}
