const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '13',
    '-1',
    '7',
    '7',
    '-9223372036854775808',
    '7',
    '-9223372036854775808',
    '-3',
    '7',
    '0',
    '-1',
    '7',
    '0',
    '-3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = [];
for (let i = 0; i < n; i += 1) {
    arr.push(gets());
}

const numCount = new Map();
arr.forEach((num) => {
    const count = numCount.get(num) || 0;
    numCount.set(num, count + 1);
});

for (const key of numCount) {
    if (key[1] % 2 !== 0) {
        print(key[0]);
        break;
    }
}
