const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '1, 3, -6, 7, 4, 1, 12',
    '3',
    '1, 2, -3',
    '1, 3, -2',
    '1, -1',

];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const solve = (args) => {
    const valley = gets().split(' ').map(Number);
    const n = +gets();

    let maxSum = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < n; j += 1) {
        const pattern = gets().split(', ').map(Number);
        const arr = [];
        let sum = 0;
        let i = 0;
        let index = 0;

        while ( // typeof valley[index] === 'number' &&
            arr.indexOf(index) < 0 &&
            index >= 0 &&
            index < valley.length) {
            sum += valley[index];
            // valley[index] = 'collected';
            arr.push(index);
            index += pattern[i];
            i += 1;
            i %= pattern.length;
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    print(maxSum);
};

