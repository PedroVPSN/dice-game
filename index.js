//logic first
//html and css second

//attempt to create a random number variable between 1 and 6



// html element declarations
const rollButton = document.getElementById("roll");
const playScored = document.getElementById("playScored")
const diceImage = document.getElementById("diceImage")
    //const go here

diceImage.style.visibility = "hidden"

let numberRolled;
let pointScored = 0;

// function declaration

const diceRoll = () => {
    numberRolled = Math.ceil(Math.random() * 6)
    console.log(`I am the numberRolled variable: ${numberRolled}`)
}

const winOrLose = () => {
    // numberRolled = 2;
    // pointScored = 18;
    scoreAddition();
    if (numberRolled == 1) {
        console.log("ha. you lose")
        pointScored = 0;

    } else if (pointScored > 20) {
        console.log("How did you win? Did you cheat?")
        pointScored = 0;
    } else {
        console.log("oh, carry on")
    }
}
const scoreAddition = () => {
    diceRoll();
    pointScored += numberRolled;
    console.log(`My total score is: ${pointScored}`);
}

rollButton.addEventListener("click", () => {
    diceRoll()
    playScored.textContent = numberRolled;
    diceImage.style.visibility = "visible";
    diceImage.src = `img/dice${numberRolled}.png`
    console.log("This button works");

})

// winOrLose()
// rollButton()