const cards = document.getElementsByClassName("card")
var clickActive = false;
var lastCard = "";
var lastClass = "";
var awaiting = false;
var score = 0;

console.log(cards);
function flipCard(id, type){
    console.log("awaiting = " + awaiting);
    if(awaiting) {
        console.log("You cannot flip a card right now!");
        return;
    }
    console.log("START OF FUNCTION " + "lastCard = " + lastCard + " lastClass = " + lastClass + " clickActive = " + clickActive);
    console.log("card flipped with id " + id + " with class " + type);
    if(document.getElementById(id).style.backgroundColor == "") {
        document.getElementById(id).style.backgroundColor = type;
    }
    else {
        document.getElementById(id).style.backgroundColor = "";
    }
    console.log("Checking if match " + "clickActive = " + clickActive + " type = " + type + " lastCard = " + lastCard + " lastClass = " + lastClass); 
    if(clickActive) {
        if(type === lastClass) {
            console.log("Match!!")
            document.getElementById(id).style.backgroundColor = type;
            document.getElementById(lastCard).style.backgroundColor = lastClass;
        }
        else { 
            document.getElementById(id).style.backgroundColor = type;
            awaiting = true;
            console.log("Waiting... awaiting = " + awaiting);
            setTimeout(() => {
                document.getElementById(id).style.backgroundColor = "";
                document.getElementById(lastCard).style.backgroundColor = "";
                clearMemory();
                awaiting = false;
                console.log("Waiting complete! awaiting = " + awaiting);
            }, 2000)
        }
    }
    console.log("Before inversion, clickActive = " + clickActive);
    clickActive = !clickActive;
    console.log("Checking to store last card if true, clickActive = " + clickActive);
    if(clickActive) {
        lastCard = id;
        lastClass = type;
    }
    console.log("END OF FUNCTION " + "lastCard = " + lastCard + " lastClass = " + lastClass + " clickActive = " + clickActive);
    score++;
    update();
}

function clearMemory() {
    lastCard = "";
    lastClass = "";
}

function shuffle() { 
    console.log("Shuffling...")
    for(let i = 1; i <= cards.length; i++) {
        let random = Math.floor(Math.random() * cards.length);
        let tempCard = "card" + i;
        console.log("i = " + i + "random = " + random + "tempCard = " + tempCard);
        document.getElementById(tempCard).style.order = random;
    }
}

function update() { 
    document.getElementById("score").innerHTML = "Score: " + score;
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