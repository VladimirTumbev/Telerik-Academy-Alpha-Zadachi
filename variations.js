const generateVariationsWithoutRep =
    (n, k, index, variations, used, allVariations) => {
        if (index === k) {
            allVariations.push([...variations]);
            return;
        }

        for (let i = 0; i < n; i += 1) {
            if (used[i]) {
                continue;
            }

            variations[index] = i + 1;
            used[i] = true;
            generateVariationsWithoutRep(n, k, index + 1,
                variations, used, allVariations);
            used[i] = false;
        }
    };

const n = 5;
const k = 5;
const variation = Array.from({
    length: k,
});
const used = Array.from({
    length: n,
});
const allVariations = [];
generateVariationsWithoutRep(n, k, 0, variation, used, allVariations);

allVariations.forEach((variationz) => console.log(variationz.join(' ')));
