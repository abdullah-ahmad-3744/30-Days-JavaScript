const prompt = require ("prompt-sync") ();

// Map method
const array = [2,4,6,8,10];
array.map( (element) => {
    console.log(element);
})


// Filter method
const array2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
array2.filter( (element) => {
    if (element % 2 == 0) {
        console.log(element);
        
    }
})
// create a new array of odd elements from an existing array
const array3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let oddArray = [];
array3.filter((element) => {
    if (element % 2 != 0) {
        oddArray.push(element)
    }
})
console.log(oddArray);