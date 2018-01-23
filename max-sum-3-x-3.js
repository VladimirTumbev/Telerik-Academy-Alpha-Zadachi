const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '3 3',
    '4 3 5',
    '2 6 4',
    '8 2 7',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [rows, cols] = gets().split(' ').map(Number);
const matrix = [];
let maxResult = Number.MIN_SAFE_INTEGER;
let currentResult = 0;

for (let i = 0; i < rows; i += 1) {
    matrix.push([...gets().split(' ').map(Number)]);
}

const sumOfNineElements = (row, col) => {
    let result = 0;
    for (let i = row; i < row + 3; i += 1) {
        for (let j = col; j < col + 3; j += 1) {
            result += matrix[i][j];
        }
    }
    return result;
}

for (let row = 0; row < rows - 2; row += 1) {
    for (let col = 0; col < cols - 2; col += 1) {
        currentResult = sumOfNineElements(row, col);
        if (currentResult > maxResult) {
            maxResult = currentResult;
        }
    }
}

print(maxResult);
