const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '1',
    '2',
    '3',
    '4',
    '2',
    '8',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const quadArr = [+gets(), +gets(), +gets(), +gets()];
const rows = +gets();
const cols = +gets();

for (let i = 4; i < rows * cols; i += 1) {
    quadArr[i] = quadArr[i - 1] + quadArr[i - 2] + quadArr[i - 3] + quadArr[i - 4];
}

let counter = 0;

for (let i = 0; i < rows; i += 1) {
    print(quadArr.slice(counter, counter + cols).join(' '));
    counter += cols;
}