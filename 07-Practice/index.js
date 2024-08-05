const prompt = require ("prompt-sync") ();
// ************************************   Q No.1    *********************************************************
// User will guess my favorite book 
console.log(" ");
console.log(`****************************************************************`);
console.log(" ");
console.log(`Favorite book guessing game activity :- `);
console.log(" ");
console.log(`****************************************************************`);
console.log(`Enter "quit" for quiting the game :- `);
console.log(" ");
console.log("*********************************");
let myFavoriteBook = "quaran";
let userInput = prompt("Guess my favorite book :- ");
while( (userInput != myFavoriteBook) && (userInput != "quit")) {
    userInput = prompt(`Wrong guess. please try again :- `)
}
if ( userInput == myFavoriteBook) {
    console.log("You guessed my favorite and you won the game :- ");
    
} else {
    console.log("You quited the game :- ");
    
}
// *********************************************************************************************************************




// ************************************   Q No.2    *********************************************************
// User enters a maximum number and then tries to guess the random generated number between 1 to maximum number/user number 
console.log("********************** Enter 0 to quit the game **********************");

let userNumber = parseInt(prompt("Enter a number :- "))
let randomNumber = Math.floor(Math.random() * userNumber) + 1;
// console.log(randomNumber);
let userGuess = parseInt(prompt("Guess the random generated number :- "))
while(true) {
    if (userGuess == 0) {
        console.log("You quit the game :- ");
        break;
        
    } else if (userGuess == randomNumber) {
        console.log("Congrats :- ");
        break;
    } else {
        userGuess = parseInt(prompt ("Wrong guess. please try again :- "))
        
    }
}
// *********************************************************************************************************************