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
    '714141822.267092906',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const number = gets();
const arr = number.split('');
const reverseString = arr.reverse().join('');
print(reverseString);

