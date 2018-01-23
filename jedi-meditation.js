const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '7',
    'P4 P2 P3 M1 K2 P1 K1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = gets().split(' ');

const masterArr = [];
const knightArr = [];
const padawanArr = [];

for (const jedi of arr) {
    if (jedi[0] === 'M') {
        masterArr.push(jedi);
    }
    if (jedi[0] === 'K') {
        knightArr.push(jedi);
    }
    if (jedi[0] === 'P') {
        padawanArr.push(jedi);
    }
}

const sortedStr = `${masterArr.join(' ')} ${knightArr.join(' ')} ${padawanArr.join(' ')}`
print(sortedStr);
