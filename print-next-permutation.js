const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '3',
    '1 2 3'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;


const n = +gets();
const perm = gets().split(' ').map(Number);

const nextPermutation = (array) => {
    // Find non-increasing suffix
    let i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i]) {
        i--;
    }
    if (i <= 0) {
        return false;
    }
    // Find successor to pivot
    let j = array.length - 1;
    while (array[j] <= array[i - 1]) {
        j--;
    }
    let temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;
    
    // Reverse suffix
    j = array.length - 1;
    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return true;
};

nextPermutation(perm);
print(perm.join(' '));
