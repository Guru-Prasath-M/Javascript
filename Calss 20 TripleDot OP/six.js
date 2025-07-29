let a = [10,10,20,30]
let b = [10,20,30]

//Create new Array based on existing
let c = [...a]
console.log(c)

//Merge Array
let d = [...a,...b]
console.log(d)

//extending new Array
let e = [...a,40,50,60]
console.log(e);
