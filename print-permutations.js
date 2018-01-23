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
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;


const n = +gets();

const ironMan = (n, index, permutations, used) => {
    if (index === n) {
        print(permutations.join(' '));
        return;
    }

    for (let i = 0; i < n; i += 1) {
        if (used[i]) {
            continue;
        }
        permutations[index] = i + 1;
        used[i] = true;
        ironMan(n, index + 1, permutations, used);
        used[i] = false;
    }
};

const permutations = Array.from({
    length: n,
});
const used = Array.from({
    length: n,
});

ironMan(n, 0, permutations, used);