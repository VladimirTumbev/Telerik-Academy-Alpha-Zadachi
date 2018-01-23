const card = gets();
const deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const end = deck.indexOf(card);

for (let i = 0; i <= end; i += 1) {
    print(`${deck[i]} of spades, ${deck[i]} of clubs, ${deck[i]} of hearts, ${deck[i]} of diamonds`);
}