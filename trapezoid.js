const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '5',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();

for (let i = 0; i < n + 1; i += 1) {
    if (i === 0) {
        print('.'.repeat(n) + '*'.repeat(n));
    } else if (i === n) {
        print('*'.repeat(2 * n));
    } else if (i === 1) {
        print('.'.repeat(n - i) + '*' + '.'.repeat(n - i) + '*');
    } else {
        print('.'.repeat(n - i) + '*' + '.'.repeat(n + i - 2) + '*');
    }
}
