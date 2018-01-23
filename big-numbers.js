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
    '3 4',
    '8 3 3',
    '6 2 4 2',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const lengthArrays = gets().split(' ');
const lengthArrOne = lengthArrays[0];
const lengthArrTwo = lengthArrays[1];
const maxLength = Math.max(lengthArrOne, lengthArrTwo);
const arrOne = gets().split(' ').map(Number);
const arrTwo = gets().split(' ').map(Number);
const sum = [];
let currentDigit = 0;
// print(lengthArrOne);
// print(lengthArrTwo);
// print(maxLength);
// print(arrOne);
// print(arrTwo);
for (let i = 0; i < maxLength; i += 1) {
    if (typeof (arrOne[i]) === 'undefined') {
        arrOne[i] = 0;
    }

    if (typeof (arrTwo[i]) === 'undefined') {
        arrTwo[i] = 0;
    }

    currentDigit += arrOne[i] + arrTwo[i];

    if (currentDigit <= 9) {
        sum.push(currentDigit);
        currentDigit = 0;
    }

    if (currentDigit > 9) {
        currentDigit %= 10;
        sum.push(currentDigit);
        currentDigit = 1;
    }
}
// print(sum.join(''));
print(sum.join(' ').split(', '));
