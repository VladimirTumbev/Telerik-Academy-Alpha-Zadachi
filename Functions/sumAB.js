const numberOfPairs = gets();

for (let i = 0; i < numberOfPairs; i += 1) {
    let numbers = gets().split(" ");
    print(+numbers[0]+ +numbers[1]);
}