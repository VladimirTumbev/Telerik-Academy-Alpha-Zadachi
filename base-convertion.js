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

const hexToDecimal = (args) => {
    const hex = gets;
    const dec = parseInt(hex, 16);
    print(dec);
};
hexToDecimal();

const decToHex = (args) => {
    const dec = gets;
    const hex = dec.toString(16).toUpperCase();
    print(hex);
};
decToHex();

const decToBin = (args) => {
    const dec = gets;
    const bin = (dec >>> 0).toString(2);
    print(bin);
};
decToBin();

const binToDec = (args) => {
    const bin = gets;
    const dec = parseInt(bin, 2);
    print(dec);
};
binToDec();

const binaryToDecimal = (args) => {
    const bin = gets.toString();
    let dec = 0;

    for (let i = 0; i < bin.length; i += 1) {
        dec = dec * 2 + (bin[i] === '1' ? 1 : 0);
    }

    print(dec);
};
binaryToDecimal();

const hexToBin = () => {
    const hex = gets();
    const dict = {
        0: '0000',
        1: '0001',
        2: '0010',
        3: '0011',
        4: '0100',
        5: '0101',
        6: '0110',
        7: '0111',
        8: '1000',
        9: '1001',
        'A': '1010',
        'B': '1011',
        'C': '1100',
        'D': '1101',
        'E': '1110',
        'F': '1111',
    };

    let binary = '';

    for (let i = 0; i < hex.length; i += 1) {
        binary += dict[hex[i]];
    }
    print(binary.replace(/^0+(?!\.|$)/, ''));
    // print('000110100010101100111100010011010101111001101111');
};
hexToBin();