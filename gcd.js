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
    '5 15',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const NM = gets().split(' ').map(Number);
const n = NM[0];
const m = NM[1];

let max = Math.max(n, m);
let min = Math.min(n, m);

const gcd = (numMax, numMin) => {
    let reminder = numMax % numMin;
    if (reminder === 0) {
        return numMin;
    }
    numMax = numMin;
    numMin = reminder;
    return gcd(numMax, numMin);
}

print(gcd(max, min));
