var eids = [101,102,103,104];
var emp = {"eid" : 101,
           "ename" : 'Guru',
           "esal" : 45000}  // creating a object

console.log(emp)
console.log(emp.eid)

emp.ename = "GuruPrasath" // updating a value 
emp.email = "gp@gmail.com" // if there is not it will add a value
console.log(emp)

delete emp.esal; //deleting a value
console.log(emp)

