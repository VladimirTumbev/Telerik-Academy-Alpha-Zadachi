/* Using loops write a program that
converts a hexadecimal integer number to its decimal form. */

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    'FE',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const hex = gets();
const reverseHex = hex.split('').reverse().join('');
let inDec = 0;
const helper = '0123456789ABCDEF';

for (let i = 0; i < reverseHex.length; i += 1) {
    const value = helper.indexOf(reverseHex[i]);
    inDec += value * Math.pow(16, i);
}

print(inDec);
