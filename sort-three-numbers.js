const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '3', '2', '1',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const a = +gets();
const b = +gets();
const c = +gets();

if (a > b && a > c) {
    if (b > c) {
        print(`${a} ${b} ${c}`);
    } else if (b <= c) {
        print(`${a} ${c} ${b}`);
    }
} else if (b > c && b > a) {
    if (a > c) {
        print(`${b} ${a} ${c}`);
    } else if (c >= a) {
        print(`${b} ${c} ${a}`);
    }
} else if (c > b && c > a) {
    if (b > a) {
        print(`${c} ${b} ${a}`);
    } else if (a >= b) {
        print(`${c} ${a} ${b}`);
    }
} else {
    print(`${a} ${b} ${c}`);
}
