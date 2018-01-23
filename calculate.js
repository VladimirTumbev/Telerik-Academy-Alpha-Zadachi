const N = +gets();
// const N = 3;
const x = +gets();
// const x = 2;
let sum = 1;
const fact = (num) => {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * fact(num - 1);
};

for (let i = 1; i <= N; i += 1) {
    const factorial = fact(i);
    const xPow = Math.pow(x, i);
    sum += (factorial / xPow);
}

print(sum.toFixed(5));
