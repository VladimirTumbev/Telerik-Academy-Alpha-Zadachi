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
    '5',
    '4 3 2 5 2',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = gets().split(' ').map(Number);
let evenProduct = 1;
let oddProduct = 1;
for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 0) {
        oddProduct *= arr[i];
    } else if (i % 2 !== 0) {
        evenProduct *= arr[i];
    }
}
if (evenProduct === oddProduct) {
    print(`yes ${evenProduct}`);
} else {
    print(`no ${oddProduct} ${evenProduct}`);
}