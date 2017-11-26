// Print to the console the even numbers between two given numbers
'use strict';

function printEvenNumbers(start, end){
    // handle input. Convert input to numbers    
    let n = +start;
    let m = +end;

    let current = n;
    // checks if initial start number is Even or Odd, if it is odd it adds 1 to move to the next Even number
    if (!(current % 2 === 0)){
        current += 1; 
    }

    while (m >= current) {
        console.log(current);
        current += 2; // since the above ensures that current is always even, adding 2 will ensure that the next number printed will be even.   
    }
}

//Test
console.log(printEvenNumbers(2, 22));
console.log(printEvenNumbers(3, 22));
console.log(printEvenNumbers("3", "22"));
