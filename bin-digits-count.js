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
    '10',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const B = gets();
const N = +gets();
let remainder;
for (let i = 0; i < N; i += 1) {
    let counter = 0;
    let num = +gets();
    let bin = '';
    do {
        remainder = Math.floor(num % 2);
        num = Math.floor(num / 2);
        bin = remainder.toString() + bin;
    } while (num > 0);
    for (let j = 0; j < bin.length; j += 1) {
        if (bin[j] === B) {
            counter += 1;
        }
    }
    // print(bin);
    print(counter);
}