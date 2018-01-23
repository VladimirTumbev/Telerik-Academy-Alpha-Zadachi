const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
for (let i = 1; i <= n; i += 1) {
    let line = '';
    for (let j = 1; j <= n; j += 1) {
        line += (i + j - 1);
    }
    print(line);
}
