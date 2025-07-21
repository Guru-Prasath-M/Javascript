class account{
    //CLass contains properties and methods
    acc_Id = 101;
    open_account(){
        console.log("Account Opened Successfully")
    }
}

let a1 = new account();
let a2 = new account();

console.log(a1)  // Account {acc_Id : 101}
console.log(a2)  // Account {acc_Id : 102}

console.log(a1.acc_Id)
console.log(a2.acc_Id)