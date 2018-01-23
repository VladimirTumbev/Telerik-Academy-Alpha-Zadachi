const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    // '2 2',
    // '0 1',
    // '1 1',
    // '1 0',
    // '1 1',
    // 'Shoot 1 1',
    // 'Shoot 0 1',
    // 'Shoot 0 0',
    // 'Shoot 0 0',
    // 'Shoot 1 1',
    // 'Shoot 1 0',
    // 'END',

    '3 4',
    '0 1 1 1',
    '1 1 0 0',
    '1 1 0 1',
    '1 0 1 1',
    '1 0 0 0',
    '1 1 1 1',
    'Shoot 2 3',
   'Shoot 1 1',
   'Shoot 2 1',
   'Shoot 0 0',
   'Shoot 1 1',
   'Shoot 1 1',
   'Shoot 2 1',
   'Shoot 2 3',
   'END',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

const [R, C] = gets().split(' ').map(Number);
const matrixPlayerOne = [];
const matrixPlayerTwo = [];

let resultPlayerOne = 0;
let resultPlayerTwo = 0;

for (let i = 0; i < R; i += 1) {
    const row = gets().split(' ').map(Number);
    matrixPlayerOne.push([...row]);
}

for (let i = 0; i < R; i += 1) {
    const row = gets().split(' ').map(Number).reverse();
    matrixPlayerTwo.push([...row]);
}

for (let i = 0; i < R; i += 1) {
    for (let j = 0; j < C; j += 1) {
        if (matrixPlayerOne[i][j] === 1) {
            resultPlayerOne += 1;
        }
        if (matrixPlayerTwo[i][j] === 1) {
            resultPlayerTwo += 1;
        }
    }
}

matrixPlayerTwo.reverse();
let counter = 1;
let command;

while ((command = gets()) !== 'END') {
    let [instruction, shootR, shootC] = command.split(' ');
    shootR = +shootR;
    shootC = +shootC;
    //player 1 shoots
    if (counter % 2 !== 0) {
        if (matrixPlayerTwo[shootR][shootC] === 0) {
            matrixPlayerTwo[shootR][shootC] = 'x';
            print('Missed');
        } else if (matrixPlayerTwo[shootR][shootC] === 1) {
            matrixPlayerTwo[shootR][shootC] = 'x';
            resultPlayerTwo -= 1;
            print('Booom');
        } else if (matrixPlayerTwo[shootR][shootC] === 'x') {
            print('You already shot there!');
        }
    } else { //player 2 shoots
        if (matrixPlayerOne[shootR][shootC] === 0) {
            matrixPlayerOne[shootR][shootC] = 'x';
            print('Missed');
        } else if (matrixPlayerOne[shootR][shootC] === 1) {
            matrixPlayerOne[shootR][shootC] = 'x';
            resultPlayerOne -= 1;
            print('Booom');
        } else if ((matrixPlayerOne[shootR][shootC] === 'x')) {
            print('You already shot there!');
        }
    }

    counter++;
}

print(`${resultPlayerOne}:${resultPlayerTwo}`);
