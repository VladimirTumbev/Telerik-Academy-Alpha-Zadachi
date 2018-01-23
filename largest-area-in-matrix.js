const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '5 6',
    '1 3 2 2 2 4',
    '3 3 3 2 4 4',
    '4 3 1 2 3 3',
    '4 3 1 3 3 1',
    '4 3 3 3 1 1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

gets();

const matrix = [];
let line;

while (line = gets()) {
    matrix.push(line.split(' ').map((value) => parseInt(value)));
}

// let array = matrix[0];
// let occurances = 0;
// let max = 0;
// for (let i = 0; i < array.length; i++) {
//     occurances += 1;
//     if (array[i] !== array[i + 1]) {
//         if (occurances > max) {
//             max = occurances;
//         }
//         occurances = 0;
//     }
// }
// print(max);

let visited = [];
for (let i = 0; i < matrix.length; i++) {
    visited.push([]);
    for (let j = 0; j < matrix[0].length; j++) {
        visited[i][j] = false;
    }
}

const getSameHeightbours = (matrix, row, column, visited) => {
    let occurances = 1;

    visited[row][column] = true;

    if (row < matrix.length - 1 && visited[row + 1][column] == false && matrix[row + 1][column] == matrix[row][column]) {
        // the number below is neightbor of the number at top
        occurances += getSameHeightbours(matrix, row + 1, column, visited);
    }

    if (column > 0 && visited[row][column - 1] === false && matrix[row][column - 1] === matrix[row][column]) {
        // to the left
        occurances += getSameHeightbours(matrix, row, column - 1, visited);
    }

    if (column < matrix[row].length - 1 && visited[row][column + 1] === false && matrix[row][column + 1] === matrix[row][column]) {
        // to the right
        occurances += getSameHeightbours(matrix, row, column + 1, visited);
    }

    if (row > 0 && visited[row - 1][column] === false && matrix[row - 1][column] === matrix[row][column]) {
        // top
        occurances += getSameHeightbours(matrix, row - 1, column, visited);
    }

    return occurances;
}

let maxOccurencies = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
        let neightbors = getSameHeightbours(matrix, i, j, visited);
        if (neightbors > maxOccurencies) {
            maxOccurencies = neightbors;
        }
    }
}

print(maxOccurencies);
