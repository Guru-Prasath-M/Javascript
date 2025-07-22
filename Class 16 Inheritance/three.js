class parent{
    Pname;
    constructor(Pname){
        this.Pname = Pname;
    }
}

class child extends parent{
    cname;
    constructor(cn , pn){
        super(pn)
        this.cname = cn;
    }
}

let c1= new child("Guru","Mahendran")
console.log(c1)