// Example of using rest operator in a function

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));         // Output: 6
console.log(sum(5, 10, 15, 20));   // Output: 50

// Example of using rest operator in array destructuring

const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // Output: 10
console.log(rest);  // Output: [20, 30, 40]