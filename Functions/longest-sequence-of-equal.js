const n = 2;
// const arr = [10, //0
//     2, // 1
//     1, // 2
//     1, // 3
//     1, // 4
//     1, // 5
//     1, // 6
//     2, // 7
//     2, // 8
//     2, // 9
//     1, // 10
// ]
// const arr = [
//     1,
//     1,
//     1,
//     1,
//     1, 
// ]


// let n = +gets();
// let arr = [];
// for(let i = 0; i < n; i += 1){
//     let line = +gets();
//     arr.push(line);
// }
// // print = (whatToPrint) => {
// // console.log(whatToPrint);
// // };

// let sequentials = 0;
// let current = 1;

// for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === arr[i - 1]) {
//         current += 1;
//         if (current > sequentials) {
//             sequentials = current;
//             if (arr[i] !== arr[i + 1] || arr[i] !== arr[i - 1]) {
//                 current = 1;
//             }
//         }
//     }
// }

// print(sequentials);

let n = +gets();
let array = [];
for (let i = 0; i < n; i += 1) {
    let line = +gets();
    array.push(line);
}

let counter = 1;
let maxCounter = 1;

for (let i = 0; i < array.length - 1; i += 1) {
    let currentNumber = array[i];
    let nextNumber = array[i + 1];
    if (currentNumber == nextNumber) {
        counter += 1;
        if (counter > maxCounter) {
            maxCounter = counter;
        }
    } else {
        counter = 1;
    }
    currentNumber = nextNumber;
}
print(maxCounter);