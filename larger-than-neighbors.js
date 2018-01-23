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
    '6',
    '-26 -25 -28 31 2 27',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = gets().split(' ').map(Number);
const result = [];

for (let i = 0; i < arr.length; i += 1) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
        result.push(i);
    }
}

if (result.length === 0) {
    print('0');
} else {
    print(result.length);
}
