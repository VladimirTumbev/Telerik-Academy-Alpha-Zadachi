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
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n = +gets();
let line = '';

for (let i = 1; i <= n; i+= 1) {
    line += i + ' ';
}

print(line);
