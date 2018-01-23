const generateCombinationsWithoutRep = (n, k, index, combination, allCombinations) => {
    if (index === k) {
        allCombinations.push([...combination]);
        return;
    }

    const start = index ? combination[index - 1] + 1 : 1;

    for (let i = start; i <= n; i += 1) {
        combination[index] = i;
        generateCombinationsWithoutRep(n, k, index + 1, combination, allCombinations);
    }
};

const n = 4;
const k = 3;
const combination = Array.from({
    length: k,
});
const allCombinations = [];

generateCombinationsWithoutRep(n, k, 0, combination, allCombinations);

allCombinations.forEach((combinationz) => console.log(combinationz.join(' ')));
