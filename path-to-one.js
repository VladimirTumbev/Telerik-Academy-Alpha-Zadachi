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
    '2387295450',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


const N = +gets();
let counter = 0;
const pathToNeo = (num) => {
    if (num === 1) {
        return counter;
    }
    if (num % 2 === 0) {
        counter += 1;
        num /= 2;
        return pathToNeo(num);
    } else if (((num - 1) / 2) % 2 === 0 || num === 3) {
        counter += 1;
        num -= 1;
        return pathToNeo(num);
    } else if (((num + 1) / 2) % 2 === 0) {
        counter += 1;
        num += 1;
        return pathToNeo(num);
    }

    return counter;
};
print(pathToNeo(N));
