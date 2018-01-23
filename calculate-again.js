const N = +gets();
const x = +gets();

const fact = (num) => {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * fact(num - 1);
};

const result = fact(N) / fact(x);

print(result);

