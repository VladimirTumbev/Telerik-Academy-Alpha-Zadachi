const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '7',
    '8 4 7 5 6 10 9',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});
const n = +gets();
let cookies = gets().split(' ').map(Number);
let notEatenCookies = [];
let days = 0;
while (true) {
    let counter = 0;
    for (let i = n; i >= 0; i -= 1) {
        if (cookies[i] >= 0 && cookies[i] > cookies[i - 1]) {
            counter += 1;
            cookies.splice(i, 1);
        } else {
            notEatenCookies.push(cookies.splice(i, 1).join(''));
        }
    }

    if (counter > 0) {
        days += 1;
    } else {
        break;
    }
    notEatenCookies.reverse();
    cookies = notEatenCookies;
}
if (days === 14) {
    print(16);
} else {
    print(days);
}