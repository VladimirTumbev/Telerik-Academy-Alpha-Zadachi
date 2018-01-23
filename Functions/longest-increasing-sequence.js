let n = 5;
let array = [
    1,
    2,
    3,
    4,
    10,
    11,
    12,
    22,
    23,
];
let n = +gets();
let array = [];
for(let i = 0; i < n; i += 1){
    let line = +gets();
    arr.push(line);
}    


// print = (whatToPrint) => {
// console.log(whatToPrint);
// };

let counter = 1;
let maxCounter = 1;

for (let i = 0; i < arr.length; i += 1) {
    let currentNumber = (arr[i]) + 1;
    let nextNumber = arr[i + 1];
    if(currentNumber == nextNumber){
        counter += 1;
        if(counter > maxCounter){
            maxCounter = counter;
        }
    }else{
        counter = 0;
    }
    currentNumber = nextNumber;
}
print(maxCounter);