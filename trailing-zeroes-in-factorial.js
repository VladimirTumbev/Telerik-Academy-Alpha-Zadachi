const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '15',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
let count = 0;

for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
}
print(count);
