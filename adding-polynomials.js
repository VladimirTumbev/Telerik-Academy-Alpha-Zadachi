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
    '5 0 1',
    '7 4 -3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const firstPoly = gets().split(' ').map(Number);
const secondPoly = gets().split(' ').map(Number);
const result = [];
for (let i = 0; i < n; i += 1) {
    result.push(firstPoly[i] + secondPoly[i]);
}

print(result.join(' '));