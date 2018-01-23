//  Calculate the factorial of a given number N (N!)
// Example: 3! = 1 * 2 * 3 = 6
// Example 2: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Example 3: 0! = 1

'use strict';

const factorial = (num) => {
    let n = +num; // this handles the imput if it is a string and not a number
    let factoria = 1;

    while (n > 0) {
        factoria *= n;
        n -= 1;
    }

    return factoria;
};


const factorialRecursive = function(num) {
    const n = +num; // this handles the imput if it is a string instead of a number
    if (n === 0) {
        return 1;
    }
        return n * factorialRecursive(n - 1);
};
// Tests for the function with a While Loop
console.log(factorialWhileLoop(0));
console.log(factorialWhileLoop('5'));
// Tests for factorial with recursive function
console.log(factorialRecursive(0));
console.log(factorialRecursive('5'));
