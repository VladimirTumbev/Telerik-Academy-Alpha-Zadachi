const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '28, 1, 45, 255',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const messageArr = gets().split(',').map(Number);

const convertToBinary = (num) => {
    const inBinary = (num >>> 0).toString(2);
    if (inBinary.length < 8) {
        return '0'.repeat(8 - inBinary.length) + inBinary;
    }

    return inBinary;
};
// to be optimitzed with substring if doesn't pass the TLE/MLE tests
const removeOddorEvenBits = (index, element) => {
    const allBits = element.split('');
    const decodedNumber = [];
    if (index % 2 === 0) {
        for (let i = 1; i < element.length; i += 2) {
            decodedNumber.push(allBits[i]);
        }
    } else {
        for (let i = 0; i < element.length; i += 2) {
            decodedNumber.push(allBits[i]);
        }
    }
    return decodedNumber.join('');
};

const result = [];
for (let i = 0; i < messageArr.length; i += 1) {
    result.push(removeOddorEvenBits(i, convertToBinary(messageArr[i])));
}

print(result.join(''));
