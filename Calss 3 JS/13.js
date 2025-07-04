//slice (starting index , ending index)
//ending index will not included and print


let arr = ['a','b','c','d','e']
// console.log(arr.slice(1,-2))


//reverse 
arr.reverse()
console.log(arr)


//join - converts array to string
let str = arr.join()
console.log(arr)


//split - converts string to array
let str1 = "q,w,e,r"
let arr1 = str1.split(',')
console.log(arr1)


//concat and spread operator
let firstarr = [1,2,3]
let secondarr = [4,5,6]
joinedarr = firstarr.concat(secondarr)
console.log(joinedarr)

//spread operator
joinedarr = [...firstarr,...secondarr]
console.log(joinedarr)