const cards = document.getElementsByClassName("card")
var clickActive = false;
var lastCard = "";
var lastClass = "";
console.log(cards);
function flipCard(id, type){
    console.log("START OF FUNCTION " + lastCard, lastClass, clickActive);
    console.log("card flipped with id " + id + " with class " + type);
    if(document.getElementById(id).style.backgroundColor == "") {
        document.getElementById(id).style.backgroundColor = type;
    }
    else {
        document.getElementById(id).style.backgroundColor = "";
    }
    console.log("Checking if match " + clickActive + type + lastCard + lastClass); 
    if(clickActive) {
        if(type == lastClass) {
            document.getElementById(id).style.backgroundColor = type;
            document.getElementById(lastCard).style.backgroundColor = lastClass;
        }
    }
    console.log("Before inversion" + clickActive);
    clickActive = !clickActive;
    console.log("Checking to store last card if true" + clickActive);
    if(clickActive) {
        lastCard = id;
        lastClass = type;
    }
    else {
        clearMemory();
        document.getElementById(id).style.backgroundColor = "";
    }
    console.log("END OF FUNCTION " + lastCard, lastClass, clickActive);
}

function clearMemory() {
    lastCard = "";
    lastClass = "";
}
/* class Card {
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
} */