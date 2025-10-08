// /* Nim Trainer by [your name]
//  * based on this flowchart:
//  * https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
//  */

/* Global Variables */
var count = 0;
var trainer = false;

/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */
/* Main */
function main(){
    again = true;
        while (again == true){
            let trainer = confirm("Would you like to play against the trainer?")
            playNim();
            let prompt = confirm("Would you like to play again?")
        }
    alert("See you next time!")
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim(){
    count = 0;
    while (count < 21){
        userTurn ();
            if (count >= 21){
            alert("You lose!");
            break;
        }
        cpuTurn();
        if (count >= 21){
            alert("You win!");
            break;
        }
    }
}


/**
 * userTurn
 * @param none
 * @return none
 */


/**
 * cpuTurn
 * @param none
 * @return none
 */