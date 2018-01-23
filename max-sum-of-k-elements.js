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
    '8',
    '3',
    '3',
    '2',
    '3',
    '-2',
    '5',
    '4',
    '2',
    '7',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const n = +gets();
const k = +gets();
const arr = [];
const largest = [];
for (let i = 0; i < n; i += 1) {
    arr.push(+gets());
}
// print(arr);
const sortedArr = [];
const length = arr.length;

for (let i = 0; i < length; i += 1) {
    const highest = Math.max(...arr);
    sortedArr.push(highest);
    arr.splice(arr.indexOf(highest), 1);
}
// print(sortedArr);

// print(sortedArr);
for (let i = 0; i < k; i += 1) {
    largest.push(sortedArr[i]);
}
// print(largest);
const sum = largest.reduce((x, y) => x + y);

print(sum);
