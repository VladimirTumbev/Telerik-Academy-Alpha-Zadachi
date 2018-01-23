/*

Write a program that applies bonus score to given score in the range [1…9] by the following rules:

If the score is between 1 and 3, the program multiplies it by 10.
If the score is between 4 and 6, the program multiplies it by 100.
If the score is between 7 and 9, the program multiplies it by 1000.
If the score is less than 0 or more than 9, the program prints "invalid score".
Input
The only input line will contain one integer number - the score
Output
Output the score with the applied bonus
Constraints
The score will always be a valid integer number

*/

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
    '2',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let s = +gets();

if (s >= 1 && s <= 3) {
    s = s * 10;
    print(s);
} else if (s >= 4 && s <= 6) {
    s = s * 100;
    print(s);
} else if (s >= 7 && s <= 9) {
    s = s * 1000;
    print(s);
} else {
    print('invalid score');
}

