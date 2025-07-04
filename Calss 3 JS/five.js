//create - JS Array
var enames=['Rahul',"Sonia","priya",'NM'];
//index      0       1         2       3
//delete array element using delete keyword

delete enames[0]
delete enames[1]

console.log(enames) //[ <2 empty items>, 'priya', 'NM' ]
//Use enames.length = 0 to clear the array without changing its reference 
// (especially useful when shared).
enames.length = 0
console.log(enames) 