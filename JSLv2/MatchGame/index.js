const cards = [];
class Card {
    constructor(type, position) {
    this.type = type;
    this.position = position;
    }
}

function initialize {
    cards.length = 0;
    for(let i = 0; i < 16; i++) {
        let randType = Math.floor(Math.random() * 8);
        cards.push(new Card(randType, i));
        console.log(cards);
    }
}