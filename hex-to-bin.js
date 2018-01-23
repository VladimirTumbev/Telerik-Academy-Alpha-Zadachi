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

const N = [...gets()];
const obj = {
    '0': '0000',
    '1': '0001', // 000110100010101100111100010011010101111001101111
    '2': '0010',
    '3': '0011',
    '4': '0100',
    '5': '0101',
    '6': '0110',
    '7': '0111',
    '8': '1000',
    '9': '1001',
    'A': '1010',
    'B': '1011',
    'C': '1100',
    'D': '1101',
    'E': '1110',
    'F': '1111',
};
const result = N.map(a => obj[a]);
let counter = 0;
for (let i = 0; i < result.length; i += 1) {
    for (let j = 0; j < result[i].length; j += 1) {
        if (result[i][j] == 0) {
            counter += 1;
        } else {
            i = result.length;
            break;
        }
    }
}
const finalResult = result.join('').slice(counter);
print(finalResult);
quit(0);