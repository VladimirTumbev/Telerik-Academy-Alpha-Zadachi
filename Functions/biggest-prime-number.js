// isPrime = (number) => {
//     const maxDivider = Math.sqrt(number);
//     let isPrime = true;
//     for (let divider = 2; divider < maxDivider; divider += 1) {
//         if(number % divider === 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(number);
//     }
// }

// console.log(isPrime(25));

checkPrime = (number) => {
    number = parseInt(number);
    const maxDivider = parseInt(Math.sqrt(number));
    for (let divider = 2; divider <= maxDivider; divider += 1) {
        if (number % divider === 0) {
            return false;
        }
    }
    return true;
};

const N = +gets();
// const N = 126;

for (let num = N; num >= 2; num -= 1) {
    if (checkPrime(num)) {
        print(num);
        break;
    }
}