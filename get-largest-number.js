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
  '8 4 3',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const numArr = gets().split(' ').map(Number);

const GetMax = (arr) => {
    const max = Math.max(...arr);
    return max;
};

print(GetMax(numArr));
