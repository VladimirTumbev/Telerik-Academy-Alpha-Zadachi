const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

// test locally with 
// 5
// 1
// 2
// 3
// 4
// 5

const gets = this.gets || getGets(['25', '19 4 21']);
// let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const s = +gets();
const arr = gets().split(' ').map(Number);
 
// const s = 14;

const sums = Array.from({
    length: s + 1,
}).fill(false);

sums[0] = true;

for (const number of arr) {
    for (let sum = s; sum >= 0; sum -= 1) {
        if (sums[sum]) {
            const newSum = sum + number;
            if (newSum > s) {
                continue;
            }
            sums[newSum] = true;
        }
    }
}
if (sums[s]) {
    print('yes');
} else {
    print('no');
}
