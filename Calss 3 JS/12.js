//shift - removes element from the sarting of array
let arr = ['a','b','c','d','e']
console.log(arr.shift())
console.log(arr)

//unshift - add's element to the start of array
console.log(arr.unshift('g'))
console.log(arr)

//splice - another method for deleteing

arr.splice(2,1)
console.log(arr)

//splice - it will also replace a element
arr.splice(1,3,'h','m','b')
console.log(arr)


arr.splice(1,0,'y')
console.log(arr)