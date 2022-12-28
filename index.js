const cards = document.getElementsByClassName("card")
var clickActive = false;
var lastCard = "";
var lastClass = "";
var awaiting = false;
var score = 0;

/*console.log(cards); */
function flipCard(id, type){
    /*console.log("awaiting = " + awaiting); */
    if(awaiting) {
        alert("You cannot flip a card right now!"); 
        return;
    }
    /*console.log("START OF FUNCTION " + "lastCard = " + lastCard + " lastClass = " + lastClass + " clickActive = " + clickActive);*/
    console.log("card flipped with id " + id + " with class " + type);
    if(document.getElementById(id).style.backgroundColor == "") {
        document.getElementById(id).style.backgroundColor = type;
        document.getElementById(id).innerHTML = "";
    }
    console.log("Checking if match " + "clickActive = " + clickActive + " type = " + type + " lastCard = " + lastCard + " lastClass = " + lastClass); 
    if(clickActive) {
        if(type === lastClass) {
            /*console.log("Match!!")*/
            document.getElementById(id).style.backgroundColor = type;
            document.getElementById(id).innerHTML = "";
            document.getElementById(lastCard).style.backgroundColor = lastClass;
            document.getElementById(lastCard).innerHTML = "";
        }
        else { 
            document.getElementById(id).style.backgroundColor = type;
            document.getElementById(id).innerHTML = "";
            awaiting = true;
            console.log("Waiting... awaiting = " + awaiting);
            setTimeout(() => {
                document.getElementById(id).style.backgroundColor = "";
                document.getElementById(id).innerHTML = "?";
                document.getElementById(lastCard).style.backgroundColor = "";
                document.getElementById(lastCard).innerHTML = "?";
                clearMemory();
                awaiting = false;
                console.log("Waiting complete! awaiting = " + awaiting);
            }, 2000)
        }
    }
    /*console.log("Before inversion, clickActive = " + clickActive);*/
    clickActive = !clickActive;
    /*console.log("Checking to store last card if true, clickActive = " + clickActive);*/
    if(clickActive) {
        lastCard = id;
        lastClass = type;
    }
    /*console.log("END OF FUNCTION " + "lastCard = " + lastCard + " lastClass = " + lastClass + " clickActive = " + clickActive);*/
    score++;
    update();
}

function clearMemory() {
    lastCard = "";
    lastClass = "";
}

function shuffle() { 
    console.log("Shuffling...")
    for(let i = 0; i < cards.length; i++) {
        let random = Math.floor(Math.random() * cards.length);
        /*console.log("i = " + i + "random = " + random + "currentCard = " + cards.item(i));*/
        cards.item(i).style.order = random;
        cards.item(i).innerHTML = "?";
    }
}

function update() { 
    document.getElementById("score").innerHTML = "Score: " + score;   
    let endCheck = true;
    for(let i = 0; i < cards.length; i++){
        console.log(cards.item(i).className.split(' ')[1]);
        console.log(cards.item(i).style.backgroundColor);
        if(cards.item(i).className.split(' ')[1] != cards.item(i).style.backgroundColor) {
            endCheck = false;
        }
    }
    if(endCheck) {
        if(score === 16) {
            alert("Perfect Score!! Your score was " + score);
        }
        else if(score > 16 && score < 28) {
            alert("Great score! Your score was " + score);
        }
        else if(score > 28 && score < 40) {
            alert("Good score, your score was " + score);
        }
        else if(score > 40 && score < 60) {
            alert("OK score. Try to do better next time.") 
        }
        else if(score > 60) {
            alert("Bad score..")
        }
    }
}

function reset() {
    for(let i = 0; i < cards.length; i++){
        cards.item(i).style.backgroundColor = "";
    }
    score = 0;
    update();
    shuffle();
}

