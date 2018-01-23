const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '11',
    '1',
    '2',
    '3',
    '4',
    '5',
    '1',
    '2',
    '3',
    '4',
    '1',
    '1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = [];
for (let i = 0; i < n; i += 1) {
    arr.push(+gets());
}
let maxCounter = 1;
let counter = 1;
for (let i = 0; i < arr.length; i += 1) {
    let currentNumber = arr[i];
    const nextNumber = arr[i + 1];
    if (currentNumber < nextNumber) {
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
