const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '2',
    'we telerik academy are',
    'wearetelerikacademy',
    'we are telerik academy',
    'wearenottelerikacademy',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

const N = +gets();

const generatePermutations = (index, current, used, source, permutations) => {
    if (index === source.length) {
        permutations.push([...current]);
        return;
    }

    for (let i = 0; i < source.length; i += 1) {
        if (used[i]) {
            continue;
        }
        const next = source[i];
        current[index] = next;
        used[i] = true;
        generatePermutations(index + 1, current, used, source, permutations);
        current[index] = next;
        used[i] = false;
    }
};
for (let i = 0; i < N; i += 1) {
    const words = gets().split(' ');
    const target = gets();
    const perms = [];
    let toPrintIfTrue;
    let toPrintIfFalse = 'NOT VALID';
    generatePermutations(0, [], {}, words, perms);
    for (let j = 0; j < perms.length; j += 1) {
        if (perms[j].join('') === target) {
            toPrintIfTrue = perms[j].join(' ');
        }
    }
    if (toPrintIfTrue) {
        print(toPrintIfTrue);
    } else {
        print(toPrintIfFalse);
    }
}

