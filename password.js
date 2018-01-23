const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '123456 4',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const arr = gets().split(' ');
const n = Number(arr[0].split('').reverse().join(''));
const k = +arr[1];

const result = (Math.trunc(n / k)) + (n % k);

print(result);
