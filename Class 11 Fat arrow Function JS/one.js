//FAT ARROW FUNCTION
//To avoid undefined error we use fat arrow function in JS

let a=100
let add=()=>{
    console.log("addition")
    console.log(typeof a) //This is a number type
    console.log(typeof add) //This is a function type
}
add()