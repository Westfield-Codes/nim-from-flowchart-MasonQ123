/* Nim Trainer by [your name]
 * based on this flowchart:
 * https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
 */

/* Global Variables */
var trainer = false;
var count = 0;



/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */
/* Main */
function main(){
again = true;
if (again == true){
    trainer = confirm("Would you like to play aginst the trainer?")
    playNim();
    again = confirm("Would you like to play again?")
}
else alert("See you next time!")
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim() {
    count = 0;
    while (count < 21) {
        userTurn();
        if (count >= 21) {
            alert("You lose!");
            break;
        }

        cpuTurn();
        if (count >= 21) {
            alert("You win!");
            break;
        }
    }
}

function userTurn() {
    let turn;
    while (true) {
        turn = prompt("Input a number 1-3");
        turn = parseInt(turn);

        if (turn >= 1 && turn <= 3) {
            break; // Exit the loop if input is valid
        }
        alert("Invalid input! Please enter a number between 1 and 3.");
    }
    count += turn;
    alert("You counted " + turn + ". Count is now " + count + ".");
}

/**
 * cpuTurn
 * @param none
 * @return none
 */
function cpuTurn() {
    let turn = 0;
    if (count >= 18) {
            turn = 21 - count;
    }
    if (trainer === true) {
        turn = 4 - (count % 4);
        }
    else {
        turn = Math.floor(Math.random() * 3) + 1;
    }

    count += turn;
    alert("I counted " + turn + ". Count is now " + count + ".");
}