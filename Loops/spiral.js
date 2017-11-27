// Problem: Spiral. Given a number n, print to the console the figure below, where n is the number of rows and cols
// 1 2 3
// 8 9 4
// 7 6 5

const n = 3;
//creating the matrix as a single array.
let matrix = [];
//filling the matrix with n amount of arrays to create the matrix and fill it with "undefined"
for (let i = 0; i < n; i+= 1){
    matrix.push(Array.from({length: n}));
}
//declaring the variables to handle the direction of movement and the changes in columns and rows with that direction
// when dir is: 0 - right, 1 - down, 2 - left , 3 - up
let dir = 0,
    row = 0,
    col = 0,
    rowDirs = [0, 1, 0, -1],
    colDirs = [1, 0, -1, 0];
//As the maximum amount of numbers in the figure will be n * n (n sqrt), we use a for loop to allocate the numbers to the right place to form a spiral.
for (let counter = 1; counter <= n * n; counter+= 1){
    //counter will be the number to use - at first iteration it will be 1, next one will be 2 and so on... until n * n
    matrix[row][col] = counter;
    let nextRow = row + rowDirs[dir];
    let nextCol = col + colDirs[dir];
    //we check if the iteration will be outside of the matrix or if it has been used, if so we change the direction
    if(nextRow < 0 || nextRow >= n ||
       nextCol < 0 || nextCol >= n ||
        matrix[nextRow][nextCol] !== undefined){
            dir += 1;
            dir %= 4;
        }
    // update the row and the column    
    row += rowDirs[dir];
    col += colDirs[dir];    
}
// using a for of loop to print the figure from the matrix created above
for (const row of matrix) {
    console.log(row.join(" "));
    
}