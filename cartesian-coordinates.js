/* You are given a two-dimensional Cartesian coordinate system
and the two coordinates (X and Y) of a point in the coordinate system.
If you don't know what Cartesian coordinate system is Google it with Bing.
As you will find, the coordinate system is divided by 2 lines
which divide the plain in four parts.
Each of these parts has a lot of points that are numbered between 1 and 4.
There is one point where our lines are crossing.
This point has the following coordinates: X=0 and Y=0.
As a result this point is numbered 0.
The points on the lines are also numbered with the numbers 5 and 6.
Your task is to write a program
that finds the number of the location of the given point
 in the coordinate system.
*/

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '0',
    '0',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const x = gets();
const y = gets();

const isNegative = (str) => {
    return str.charAt(0) === '-';
};

if (x === '0' & y === '0') {
    print('0');
} else if (x === '0' && y !== '0') {
    print('5');
} else if (x !== '0' && y === '0') {
    print('6');
} else if (!isNegative(x) && !isNegative(y)) {
    print('1');
} else if (isNegative(x) && !isNegative(y)) {
    print('2');
} else if (isNegative(x) && isNegative(y)) {
    print('3');
} else if (!isNegative(x) && isNegative(y)) {
    print('4');
}
