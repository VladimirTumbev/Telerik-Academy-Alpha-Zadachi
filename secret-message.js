const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    'o2hs123o6G0ol090le42H',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const arr = gets().split('');
const letters = [];
for (let i = 0; i < arr.length; i += 1) {
    if (isNaN(Number(arr[i]))) {
        letters.push(arr[i]);
    }
}

print(letters.reverse().join(''));
