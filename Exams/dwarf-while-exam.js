const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    // test 1
    // '4 3',
    // '3 2 4',
    // '2 0 3',
    // '1 1 5',
    // '2 2 5',

    // test 2
    // '3 3',
    // '10 10 0',
    // '10 10 10',
    // '10 10 10',

    // test 3

    '3 3',
    '10 10 10',
    '10 0 10',
    '10 10 10',

    // test 4

    // '2 3',
    // '0 5 2',
    // '2 5 3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [rows, cols] = gets().split(' ').map(Number);

const matrix = [];

for (let i = 0; i < rows; i += 1) {
    matrix.push(gets().split(' ').map(Number));
}


// TO DO: find the 0 in the matrix
let startRow = 0;
let startCol = 0;
for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
        if (matrix[i][j] === 0) {
            startRow = i;
            startCol = j;
        }
    }
}

let coins = 0;

let col = startCol;
let row = startRow;

while (true) {

    let leftElement = 0;
    let rightElement = 0;
    let topElement = 0;
    let bottomeElement = 0;
    let maxElement = 0;

    if (col > 0) {
        leftElement += matrix[row][col - 1];
    }
    if (row > 0) {
        topElement += matrix[row - 1][col];
    }
    if (row < matrix.length - 1) {
        bottomeElement += matrix[row + 1][col];
    }
    if (col < cols - 1) {
        rightElement += matrix[row][col + 1];
    }
    maxElement = Math.max(leftElement, rightElement, topElement, bottomeElement);
    if (maxElement === 0) {
        break;
    }

    if ((leftElement === maxElement) && (rightElement === maxElement) && (topElement === maxElement) && (bottomeElement === maxElement)) {
        matrix[row][col] -= 1;
        coins += 1;
        col -= 1;
    } else if (leftElement === maxElement) {
        matrix[row][col] -= 1;
        coins += 1;
        col -= 1;
    } else if (rightElement === maxElement) {
        matrix[row][col] -= 1;
        coins += 1;
        col += 1;
    } else if (topElement === maxElement) {
        matrix[row][col] -= 1;
        coins += 1;
        row -= 1;
    } else if (bottomeElement === maxElement) {
        matrix[row][col] -= 1;
        coins += 1;
        row += 1;
    }
}

print(coins);
