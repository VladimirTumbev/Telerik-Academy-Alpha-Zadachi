/* Write a program that finds the biggest of 5 numbers
that are read from the console, using only 5 if statements.
*/
const a = +gets();
const b = +gets();
const c = +gets();
const d = +gets();
const e = +gets();

if (a >= b && a >= c && a >= d && a >= e) {
    print(a);
} else if (b >= a && b >= c && b >= d && b >= e) {
    print(b);
} else if (c >= a && c >= b && c >= d && c >= e) {
    print(c);
} else if (d >= a && d >= c && d >= b && d >= e) {
    print(d);
} else if (e >= a && e >= c && e >= d && e >= b) {
    print(e);
}

