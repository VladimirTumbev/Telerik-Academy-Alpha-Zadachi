const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '40 6',
    '92 11 23 42 59 48',
    '09 92 23 72 56 14',
    '17 63 92 46 85 95',
    '34 12 52 69 23 95',
    '26 88 78 71 63 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
    '26 34 16 63 39 95',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [rows, cols] = gets().split(' ').map(Number);

const matrix = Array.from({
    length: rows,
});
for (let i = 0; i < rows; i += 1) {
    matrix[i] = gets().split(' ');
}

let bestResult = 1;
let currentBest = 1;

for (let i = 0; i < rows; i += 1) {
    currentBest = 1;
    for (let j = 0; j < cols - 1; j += 1) {
        if (matrix[i][j] === matrix[i][j + 1]) {
            currentBest += 1;
            if (currentBest > bestResult) {
                bestResult = currentBest;
            }
        } else {
            currentBest = 1;
        }
    }
}
for (let i = 0; i < cols; i += 1) {
    currentBest = 1;
    for (let j = 0; j < rows - 1; j += 1) {
        if (matrix[j][i] === matrix[j + 1][i]) {
            currentBest += 1;
            if (currentBest > bestResult) {
                bestResult = currentBest;
            }
        } else {
            currentBest = 1;
        }
    }
}

for (let i = 0; i < rows; i += 1) {
    currentBest = 1;
    for (let j = 0; j < rows - 1 - i; j += 1) {
        if (matrix[i + j][j] === matrix[i + j + 1][j + 1]) {
            currentBest += 1;
            if (currentBest > bestResult) {
                bestResult = currentBest;
            }
        } else {
            currentBest = 1;
        }
    }
}

for (let i = 1; i < cols; i += 1) {
    currentBest = 1;
    for (let j = 0; j < rows - 1 - i; j += 1) {
        if (matrix[j][i + j] === matrix[j + 1][i + j + 1]) {
            currentBest += 1;
            if (currentBest > bestResult) {
                bestResult = currentBest;
            }
        } else {
            currentBest = 1;
        }
    }
}

for (let i = rows - 1; i > 0; i -= 1) {
    currentBest = 1;
    for (let j = 0; j < i; j += 1) {
        if (matrix[i - j][j] === matrix[i - j - 1][j + 1]) {
            currentBest += 1;
            if (currentBest > bestResult) {
                bestResult = currentBest;
            }
        } else {
            currentBest = 1;
        }
    }
}

for (let i = 1; i < cols - 1; i += 1) {
    currentBest = 1;
    for (let j = rows - 1; j > i; j -= 1) {
        if (matrix[j][rows - j + i - 1] === matrix[j - 1][rows - j + i]) {
            currentBest += 1;
            if (currentBest > bestResult) {
                bestResult = currentBest;
            }
        } else {
            currentBest = 1;
        }
    }
}

print(bestResult);
