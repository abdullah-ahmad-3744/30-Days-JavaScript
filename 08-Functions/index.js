// Functions in javaScript
// Defining a function
function hello () {
    console.log("Hello");
} 

// Calling the function
hello()
// ********************************************************************************************************************




// Write a function which prints the numbers from 1 to 10 
function printNumbers () {
    for (let index = 1; index <= 10; index++) {
        console.log(index);
        
    }
}
// printNumbers();


// Create a function to roll a dice and always display the value of the dice (1 to 6)

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1 ;
    console.log(randomNumber);
}
rollDice();
