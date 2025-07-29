let emp={
    eid:101,
    ename:"Guru",
    email:"guru@gmail.com"
}
let details={
    email:"guru@tcs.com",
    address:"Sathyamangalam",
    avail:true
}

let emp_Details={...emp,...details}
console.log(emp_Details)