const prompt = require("prompt-sync") ();
// ************************************   Q No.1    *********************************************************
// Create an array and print it's all elements
let array = [1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < array.length; index++) {
    // console.log(array[index]);    
}
// *********************************************************************************************************************




// ************************************   Q No.2    *********************************************************
// Change the given array ['january', 'july', 'march', 'august'] to this ['july', 'june', 'march', 'august'];
let months = ['january', 'july', 'march', 'august'];
months.shift();
months.splice(1, 0, "june")
// console.log(months);
// *********************************************************************************************************************




// Concating and reversing the arrays in js
 let numberArray1 = [1,2,3,4,5];
 let numberArray2 = [6,7,8,9,10]
 let numberArray3 = numberArray1.concat(numberArray2);
//  console.log(numberArray3);

 let primaryColors = ["red", "yellow", "blue"]
 let secondaryColors = ["orange", "green", "voilet"]
 let allColors = primaryColors.concat(secondaryColors)
//  console.log(allColors);
//  Reversing the arrays 
let reversedNumberArray = numberArray3.reverse()
// console.log(reversedNumberArray);
let reversedPrimaryColors = primaryColors.reverse()
// console.log(reversedPrimaryColors);




// ************************************   Q No.2    *********************************************************
// Return the index of the javaScript from the given array if it was reversed
let programmingLanguages = ['c', 'c++', 'html','javaScript', 'python', 'java', 'c#','sql'];
programmingLanguages.reverse(); // Reversing the arry 
console.log(programmingLanguages.indexOf("javaScript")); // Index of javaScript will be 4 after reversing the array