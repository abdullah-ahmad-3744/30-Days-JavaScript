const prompt = require("prompt-sync") ();
// ************************************   Q No.1    *********************************************************
// Create an array and print it's all elements
let array = [1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);    
}
// *********************************************************************************************************************




// ************************************   Q No.2    *********************************************************
// Change the given array ['january', 'july', 'march', 'august'] to this ['july', 'june', 'march', 'august'];
let months = ['january', 'july', 'march', 'august'];
months.shift();
months.splice(1, 0, "june")
console.log(months);
// *********************************************************************************************************************