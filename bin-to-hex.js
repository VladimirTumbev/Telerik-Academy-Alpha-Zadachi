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

let N = gets();
const obj = {
    '0000': '0',
    '0001': '1',
    '0010': '2',
    '0011': '3',
    '0100': '4',
    '0101': '5',
    '0110': '6',
    '0111': '7',
    '1000': '8',
    '1001': '9',
    '1010': 'A',
    '1011': 'B',
    '1100': 'C',
    '1101': 'D',
    '1110': 'E',
    '1111': 'F',
};

if (N.length % 4 !== 0) {
    for (let i = N.length % 4; i < 4; i += 1) {
        N = '0' + N;
    }
}
let i = 0;
let temp = [];
while (i < N.length) {
    temp.push(obj[N.slice(i, i + 4)]);
    i += 4;
}
print(temp.join(''));
quit(0);