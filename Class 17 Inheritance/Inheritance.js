class account{
    acc_name;
    acc_address;
    acc_mobile;

    constructor(name,address,phone){
        this.acc_name = name;
        this.acc_address = address;
        this.acc_mobile = phone;
    }
}

class SA extends account{
    acc_id;
    acc_bal;
    min_bal = 500;

    constructor(id,name,address,phone,amount){
        super(name,address, phone,amount)
        this.acc_id = id;
        this.acc_bal = amount;
           }

           deposite (amount){
            this.acc_bal = this.acc_bal + amount
           }

           withdrawl (amount){
            this.acc_bal = this.acc_bal - amount
           }

           get_bal(){
            return this.acc_bal - this.min_bal
           }
}


class CA extends account{
    acc_id;
    acc_bal;
    min_bal = 5000;

    constructor(id,name,address,phone,amount){
        super(name,address,phone); // Inovking patrent class constructor
        this.acc_id = id;
        this.acc_bal = amount;
    }
    deposite(amount){}
    withdrawl_Amount(amount){}
    get_Bal(){return 0}

}


let SA1 = new SA(101,'Guru','Erode',1234,5000)
let CA1 = new CA(102,'Harish','Erode',4321,15000)

// console.log(SA1)
// console.log(CA1)

SA1.deposite(1000)
console.log(SA1.get_bal())