/*

Write a program that finds the most frequent number in an array of N elements.

Input
On the first line you will receive the number N
On the next N lines the numbers of the array will be given
Output
Print the most frequent number and how many time it is repeated
Output should be REPEATING_NUMBER (REPEATED_TIMES times)
Constraints
1 <= N <= 1024
0 <= each number in the array <= 10000
There will be only one most frequent number

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
    '13',
    '4',
    '1',
    '1',
    '4',
    '2',
    '3',
    '4',
    '4',
    '1',
    '2',
    '4',
    '9',
    '3',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const N = +gets();


const arr = [];
for (let i = 0; i < N; i += 1) {
    const line = +gets();
    arr.push(line);
}

let counter = 0;
let repeatingNumber = arr[0];


for (let i = 0; i < arr.length; i += 1) {
    let currentMax = 0;
    for (let j = 0; j < arr.length; j += 1) {
        if (arr[i] === arr[j]) {
            currentMax += 1;
            if (currentMax > counter) {
                counter = currentMax;
                repeatingNumber = arr[i];
            }
        }
    }
}

print(`${repeatingNumber} (${counter} times)`);
