/*
compose function takes a list of functions and return a function 
that in turn take an argument. 
This argument is passed to the last function in the list and get a return value
this result is passed to 2nd last function in the list and get a return value
this continues till all functions of the list is exhausted and we get a final return value;
*/

// Suppose we have three functions as shown below ;


const sum = (x) => x + 5;
const multiply = (x) => x*4;
const subtract = (x) => x - 5;

// Simple Way

//Let us apply these 3 and get a final result;
const res1 = sum(5); // 10 returned
const res2 = multiply(res1); // 40
const finalResult = subtract(res2); // 35
console.log(finalResult); // 35


// Compose way

const compose = (...fns) => (value) => fns.reduceRight((acc,fn) => fn(acc), value)

console.log(compose(subtract, multiply, sum)(5))