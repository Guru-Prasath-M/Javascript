class Account{
    open_Account(){
        console.log("Account Opened Successfully")
    }
    deposit_Amount(){
        console.log("Amount Deposited Successfully")
    }
    withdrawl(){
        console.log("Insuffient Balance")
    }
    get_Bal(){
        console.log("Sever Busy")
    }
    close_Acc(){
        console.log("Balance is : -ve , Please deposit more")
    }
}

let a1=new Account();
let a2=new Account();

a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_Bal()
a1.close_Acc()