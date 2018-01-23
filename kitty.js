const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '@@@xx@*',
    '1 -1 -1 4',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;


const positionsArr = gets().split('');
const stepsArr = gets().split(' ').map(Number);

let collectedSouls = 0;
let collectedFood = 0;
let deadlocks = 0;
let jumps = 0;
let stepsIndex = 0;
let positionsIndex = 0;
let isDeadlocked = false;

if (positionsArr[0] === 'x') {
    isDeadlocked = true;
}

while (stepsIndex <= stepsArr.length) {
    if (positionsArr[positionsIndex] === '@') {
        collectedSouls += 1;
        positionsArr[positionsIndex] = 'collected';
    } else if (positionsArr[positionsIndex] === '*') {
        collectedFood += 1;
        positionsArr[positionsIndex] = 'collected';
    } else if (positionsArr[positionsIndex] === 'x') {
        deadlocks += 1;
        if (positionsIndex % 2 === 0) {
            collectedSouls -= 1;
            if (collectedSouls < 0) {
                isDeadlocked = true;
                break;
                // print('You are deadlocked, you greedy kitty!');
                // print(`Jumps before deadlock: ${jumps}`);
            } else {
                positionsArr[positionsIndex] = '@';
            }
        } else if (positionsIndex % 2 !== 0) {
            collectedFood -= 1;
            if (collectedFood < 0) {
                // print('You are deadlocked, you greedy kitty!');
                // print(`Jumps before deadlock: ${jumps}`);
                isDeadlocked = true;
                break;
            } else {
                positionsArr[positionsIndex] = '*';
            }
        }
    }
    if (stepsArr[stepsIndex] > 0) {
        positionsIndex = (positionsIndex + stepsArr[stepsIndex]) % positionsArr.length;
    } else {
        positionsIndex = positionsArr.length - positionsIndex - 1;
        positionsIndex = (positionsIndex - stepsArr[stepsIndex]) % positionsArr.length;
        positionsIndex = positionsArr.length - positionsIndex - 1;
    }
    stepsIndex += 1;
    jumps += 1;
}

if (isDeadlocked === true) {
    print('You are deadlocked, you greedy kitty!');
    print(`Jumps before deadlock: ${jumps}`);
} else {
    print(`Coder souls collected: ${collectedSouls}`);
    print(`Food collected: ${collectedFood}`);
    print(`Deadlocks: ${deadlocks}`);
}
