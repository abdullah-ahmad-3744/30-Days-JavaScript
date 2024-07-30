const prompt = require ("prompt-sync") ();
// ************************************   Q No.1    *********************************************************
// Print the numbers from 1 to 10.
for (let index = 1; index <=10; index++) {
    console.log(index);
}
// ********************************************************************************************************************




// ************************************   Q No.2    *********************************************************
// Write a program to get the number from user and print it's table. 
const userInput = Number(prompt("Enter your number to print it's table :- "));
for (let index = 1; index <= 10; index++) {
    console.log(` ${userInput } * ${index} = ${userInput * index}`);
}
// *********************************************************************************************************************



// ************************************   Q No.3    *********************************************************
// Print the sum of n natural numbers from 1 to n . Get the number as input from the user 
const userNumber = Number (prompt ("Enter your number to print the sum of numbers from 1 to n :- "));
let sum =0;
for (let index = 1; index <= userNumber; index++) {
    sum = sum + index;
}
console.log(sum);
// *********************************************************************************************************************



// ************************************   Q No.4    *********************************************************
// Write a program to find the factorial of a number.
let result = 1;
let number = Number(prompt ("Enter your number to print it's factorial :- "));
for (let index = 1; index <= number; index++) {
    result = index * result;
}
console.log(`Factorial of ${number} = ${result}`);
// *********************************************************************************************************************
