/* 
Function currying is transforming a JavaScript function from callable 
as sum(a,b) to callable as sum(a)(b) and producing the exact same result.
Look at a simple example code below.
*/


// A simple example --> transforming sum(a,b) --> sum(a)(b)
const sum1 = (a,b) => a+b;

const addition1  = sum1(3, 4);
console.log(addition1); // 7

function sum2(a){
    return function(b) {
        return a + b;
    }
}
const addition2  = sum2(3)(4);
console.log(addition2); // 7

// Coding Problem-1

/*
Problem Statement - Write function sum such that sum(1)(3)(4)....sum(n)() --> returns 1+2+3+.....+n.
For Example - sum(1)(2)(3)(4)() should return 10 as 1+2+3+4 = 10
*/

function sum(a){
    return function curried(b){
        if(!b){
            return a;
        }
        return sum(a+b)

    }
}

console.log(sum(1)(2)(3)(4)()); // 10