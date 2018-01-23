/*

Write a program that reads from the console a sequence of N real numbers and returns the minimal, the maximal number, the sum and the average of all numbers (displayed with 2 digits after the decimal point).

The input starts by the number N (alone in a line) followed by N lines, each holding an real number.
The output is like in the examples below.
Input
On the first line, you will receive the number N.
On each of the next N lines, you will receive a single real number.
Output
You output must always consist of exactly 4 lines - the minimal element on the first line, the maximal on the second, the sum on the third and the average on the fourth, in the following format:
Copy
min=3.00
max=6.00
sum=9.00
avg=4.50
Constraints
1 <= N <= 1000
All numbers will be valid integer numbers that will be in the range [-10000, 10000]
Time limit: 0.1s
Memory limit: 16MB

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
    '3',
    '2',
    '5',
    '1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = [];
for (let i = 0; i < n; i += 1) {
    arr.push(+gets());
}
const min = Math.min(...arr).toFixed(2);
const max = Math.max(...arr).toFixed(2);
const sum = arr.reduce((x, y) => {
    return x + y;
}).toFixed(2);
const avg = (sum / arr.length).toFixed(2);
print(`min=${min}\nmax=${max}\nsum=${sum}\navg=${avg}`);