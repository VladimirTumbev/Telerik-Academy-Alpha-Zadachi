const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '1 25',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [a, b] = gets().split(' ');

const isGoodNumber = (num) => {
    const numAsString = num + '';
    for (let i = 0; i < numAsString.length; i += 1) {
        if (+numAsString[i] === 0) {
            continue;
        } else if (num % +numAsString[i] !== 0) {
            return false;
        }
    }
    return true;
};
let counter = 0;

for (let i = +a; i <= +b; i += 1) {
    if (isGoodNumber(i)) {
        counter+=1;
    }
}
print(counter);
