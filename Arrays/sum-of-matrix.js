//Problem: Sum of Matrix. In a given matrix of numbers calculate the sum below/above the left-to-right diagonal including/excluding the numbers from the diagonl
/*
[
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
    [4, 5, 6, 7, 8],
    [5, 6, 7, 8, 9]
]
*/

function sumBelowDiagonal(matrix) {
    let sum = 0;
    for (let row = 1; row < matrix.length; row += 1) {
        for (let col = 0; col < row; col += 1) {
            sum += matrix[row][col];
        }
    }
    return sum;
}

function sumAboveDiagonl(matrix) {
    let sum = 0;
    for (let row = 0; row < matrix.length; row += 1) {
        for (let col = row + 1; col < matrix[row].length; col += 1) {
            sum += matrix[row][col];
        }
    }
    return sum;
}

//Tests
console.log(sumBelowDiagonal(
    [
        [1, 2, 3, 4, 5],
        [2, 3, 4, 5, 6],
        [3, 4, 5, 6, 7],
        [4, 5, 6, 7, 8],
        [5, 6, 7, 8, 9]
    ]
));

console.log(sumAboveDiagonl(
    [
        [1, 2, 3, 4, 5],
        [2, 3, 4, 5, 6],
        [3, 4, 5, 6, 7],
        [4, 5, 6, 7, 8],
        [5, 6, 7, 8, 9]
    ]
));