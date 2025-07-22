//Inheritance JS
//SUPER EXAMPLE JS

class account{
    acc_name;
    acc_address;
    acc_phone;
    constructor(name,address,phone){
        this.acc_name = name;
        this.acc_address = address;
        this.acc_phone = phone;
    }
}
class SA extends account{
    acc_id;
    acc_bal;
    min_bal = 500;
    constructor(id,name,address,phone,amount){
        super(name,address,phone);
        this.acc_id=id;
        this.acc_bal=bal;
    }
}

let s1 = new SA(101,'Guru','Erode',7894561230,5000)
console.log(s1)

class CA extends account{
    acc_id;
    acc_bal;
    min_bal = 5000;
    deposite_amount(amount){}
    withdrawl(amount){}
    get_bal(){}
}

new CA(102,'Harish','ND',3216547890,50001)