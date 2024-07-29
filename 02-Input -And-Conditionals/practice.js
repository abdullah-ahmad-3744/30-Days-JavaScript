const prompt =  require("prompt-sync") ();
// ************************************   Q No.1    *********************************************************
// Create a number variable n and take input from user and check if the number is divisible ny 10 print "Good Number" , if not print "Normal number"

const number = prompt("Enter your number to chech whether it is divisible by 10 or not :- ")
if (number %10 == 0) {
    console.log(`${number} is a Good Number `);
} else {
    console.log(`${number} is a Normal Number`);
}
// *******************************************************************************************************************




// ************************************   Q No.2    *********************************************************
// Take a number as an input from the user and check it is positive or not 
const positiveCheck = Number( prompt("Enter your number to check is it positive or not :- ") );
if (positiveCheck > 0) {
    console.log(`${positiveCheck} is a positive number`);
} else if (positiveCheck == 0) {
    console.log(`Your number is zero`);
} else {
    console.log(`${positiveCheck} is a negative number`);
}
// ********************************************************************************************************************



// ************************************   Q No.3    *********************************************************
// A string is a golden string if it is started with "A" or "a" And has a total length greater than 5 for a given string check and print is it a golden string or not 
const goldenSringCheck = prompt("Enter your string to check is is a golden string or not :- ");
if (goldenSringCheck[0] === "A" || goldenSring[0] === "a" && goldenSring.length > 5) {
    console.log(`${goldenSringCheck} is a golden string`);
} else {
    console.log(`${goldenSringCheck} is a normal string`);
}
// *********************************************************************************************************************



// ************************************   Q No.4    *********************************************************
// Take a number from user and check is it odd or even

const usernumber = Number(prompt("Enter your number to check OOD or Even :- "));
if (usernumber % 2 == 0) {
    console.log(`${usernumber} is an Even Number`);
} else {
    console.log(`${usernumber} is an ODD number`);
}




// ************************************   Q No.5    *********************************************************
// Write a switch case statement to print months in a quarter year 
// Months in first Quarter [January , February, March,]
// Months in second Quarter [April, May, June]
// Month in third Quarter [July, August, September]
// Months in fourth Quarter [October, November, December]

let firstQuarter = ["January","February", "March"] ;
let secondQuarter = ["April","May", "June"] ;
let thirdQuarter = [ "July", "August", "September"];
let fourthQuarter = [ "October", "November", "December"];
const quarterNumber = Number( prompt("Enter Number from 1 to 4 to print the months of quarter :- "));
switch (quarterNumber) {
    case 1:
        console.log(firstQuarter);
        break;
    case 2 : 
        console.log(secondQuarter);
        break;
    case 3 : 
        console.log(thirdQuarter);
        break;
    case 4 : 
        console.log(fourthQuarter);
        break
    default:
        break;
}