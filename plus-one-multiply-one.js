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
    '591 5',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const nm = gets().split(' ').map(Number);
const n = nm[0];
const m = nm[1];
const arr = [];
arr.push(n);
let counter = 0;
const sequence = (index) => {
    counter += 1;
    if (counter === m) {
        return arr[m - 1];
    }
    const s = arr[index];
    arr.push(s + 1);
    arr.push((s * 2) + 1);
    arr.push(s + 2);

    return sequence(index + 1);
};
print(sequence(0));
