const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '5 * (123 * (1 + 3) + ((4 - 3) / 6))',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const expression = gets();

const getSubExpressions = (exp) => {
    const stack = [];

    const subExpressions = [];

    exp.split('')
        .forEach((ch, index) => {
            if (ch === '(') {
                stack.push(index);
            } else if (ch === ')') {
                const first = stack.pop();
                const last = index;
                subExpressions.push(exp.substring(first, last + 1));
            }
        });

    return subExpressions;
};

getSubExpressions(expression)
    .forEach((subExp) => print(subExp));
quit(0);