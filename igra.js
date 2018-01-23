const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '111',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = gets();

const digits = n.split('').map(Number);

let bestResult = 0;
let resultOne = 0;
let resultTwo = 0;
const ones = digits.filter((num) => num === 1);
const zeros = digits.filter((num) => num === 0);
const others = digits.filter((num) => num > 1);


if (digits[1] === 1 && (digits[0] !== 1 || digits [2] !== 1)) {
    bestResult = digits[0] * digits[1] * digits[2];
} else if (digits[1] === 0) {
    bestResult = digits[0] + digits[2];
} else if (others.length > 0 && ones.length > 0) {
    bestResult = others.reduce((x, y) => x * y);
    bestResult += ones.reduce((x, y) => x + y);
} else if (others.length > 0 && ones.length === 0) {
    bestResult = others.reduce((x, y) => x * y);
} else {
    bestResult = ones.reduce((x, y) => x + y);
}

print(bestResult);