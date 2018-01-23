const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '4',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = Array.from({
    length: n,
}).fill('.');
for (let i = 0; i < n; i += 1) {
    arr[i] = '*';
    if (arr[i - 1] === '*') {
        arr[i - 1] = '.';
    }
    print(arr.join(''));
}

for (let i = n - 2; i > -1; i -= 1) {
    arr[i] = '*';
    arr[i + 1] = '.';

    print(arr.join(''));
}