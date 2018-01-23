const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();

const matrix = [];

for (let i = 0; i < n; i += 1) {
    matrix[i] = Array.from({
        length: n,
    }).fill(0);
}

let row = 0;
let col = 0;
const rowDirs = [0, +1, 0, -1];
const colDirs = [+1, 0, -1, 0];
let dir = 0;

for (let i = 1; i <= n * n; i += 1) {
    matrix[row][col] = i;
    const nextRow = row + rowDirs[dir];
    const nextCol = col + colDirs[dir];
    if (nextRow >= matrix.length ||
        nextCol >= matrix.length ||
        nextRow < 0 || nextCol < 0 ||
        matrix[nextRow][nextCol] !== 0) {
        dir += 1;
        dir %= 4;
    }
    row += rowDirs[dir];
    col += colDirs[dir];
}

for (let i = 0; i < n; i += 1) {
    print(matrix[i].join(' '));
}