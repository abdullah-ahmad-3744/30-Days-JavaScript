const prompt = require ("prompt-sync") ();
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

