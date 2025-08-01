let gotoGoa = (Success , Failure)=>{
    let acc_bal = 5000;
    acc_bal > 20000 ? Success("Go & Enjoy") : Failure("Try Next Time");
}

gotoGoa ((response) => {
    console.log(response)
    } , 
    (err) => {
        console.log(err)
})