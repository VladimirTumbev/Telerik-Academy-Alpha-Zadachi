const text = "I am hungry, hungry I am! Haha, let us go smoke right now!";
let words = text.split(/[ !,]/).filter(x => x);

const counts = {};

for (const word of words) {
    if(counts[word] === undefined) {
        counts[word] = 0;
    }

    counts[word] += 1;
}

console.log(counts);