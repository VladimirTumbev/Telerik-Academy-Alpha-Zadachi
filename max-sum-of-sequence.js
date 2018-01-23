/*

Write a program that finds the maximal sum of consecutive elements in a given array of N numbers.

Input
On the first line you will receive the number N
On the next N lines the numbers of the array will be given
Output
Print the maximal sum of consecutive numbers
Constraints
1 <= N <= 1024

*/

const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '10',
    '-2',
    '-3',
    '-6',
    '-1',
    '-2',
    '-1',
    '-6',
    '-4',
    '-8',
    '-8',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = [];
const ifAllNegative = [];
for (let i = 0; i < n; i += 1) {
    arr.push(+gets());
}
let maxSum = 0;
let sum = 0;

const allNegative = (num) => {
    return num < 0;
}

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    maxSum = Math.max(sum, maxSum);
    if (arr.every(allNegative) === true) {
        const highest = Math.max(...arr);
        ifAllNegative.push(highest);
        arr.splice(arr.indexOf(highest), 1);
        const secondHighest = Math.max(...arr);
        ifAllNegative.push(secondHighest);
        maxSum = ifAllNegative.reduce((x, y) => x + y);
        break;
    } else {
        if (sum < 0) {
            sum = 0;
        }
    }
}

print(maxSum);
