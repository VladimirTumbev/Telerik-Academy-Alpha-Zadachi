const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '3 2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const NK = gets().split(' ').map(Number);

const N = NK[0];
const K = NK[1];

const combinationsFunc = (n, k, index, combinations) => {
    if (index === k) {
        print(combinations.join(' '));
        return;
    }

    const startIndex = index ? combinations[index - 1] + 1 : 1;
    for (let i = startIndex; i <= n; i += 1) {
        combinations[index] = i;
        combinationsFunc(n, k, index + 1, combinations);
    }
};

const combinations = Array.from({
    length: N,
});

combinationsFunc(N, K, 0, combinations);
