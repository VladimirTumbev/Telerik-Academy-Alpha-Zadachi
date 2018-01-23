//Print the prime numbers between two numbers N and M
'use strict';

function printPrimes(start, end) {
    let n = +start;
    let m = +end;
    let number = n;

    while (m <= number){
        let divider = 2;
        const maxDivider = Math.sqrt(number);
        let isPrime = true;

            while (isPrime && divider <= maxDivider) {
                if(number % divider === 0){
                    isPrime = false;
                }
                console.log(number);
                divider += 1;
                 
            }                        
        number += 1;          
    }   
}

//tests
console.log(printPrimes(3, 37));
