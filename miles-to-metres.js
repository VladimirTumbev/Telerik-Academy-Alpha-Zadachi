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

const miles = +gets();
const constant = 1609;
print(miles * constant);
