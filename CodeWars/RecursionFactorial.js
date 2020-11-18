// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
// 5! = 5 * 4 * 3 * 2 * 1 = 120.
// The value of 0! is 1.
// #Your task
// You have to create the function factorial that receives n and returns n!. You have to use recursion.
const factorial = n =>{
    let getNumber = n - 1;

    if(getNumber > 0){
        return factorial(getNumber) * n;
    }
    return 1
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(6));

// Solution 2
// const factorial = n => n > 1 ? n*factorial(n-1) : 1;