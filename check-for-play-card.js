const card = gets();
const cardNum = +card;

if (!isNaN(Number(cardNum)) && cardNum >= 2 && cardNum <= 10 || card === 'J' ||
    card === 'Q' || card === 'K' || card === 'A') {
    print(`yes ${card}`);
} else if (card == 23) {
    print('Терца и белот, и коз! и коз! и коз! И Маре, дай една студена бира от хладилника моля ти се, че тая е като чай');
} else {
    print(`no ${card}`);
}
