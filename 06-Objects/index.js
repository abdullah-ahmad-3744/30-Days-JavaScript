const prompt = require("prompt-sync");

// Creating an object in javaScript 
const Object = {
    name : "Abdulah Aahmad",
    age : 23,
    address : "Bahawalpur"
}
// Accessin the object properties 
console.log(Object.name);
console.log(Object.address);
// *********************************************************************************************************************




// ************************************   Q No.1    *********************************************************
// Creat an object literal for the properties of thread/twitter post which includes =>[ userName, content, likes, reposts,tags ]

const post = {
    userName : "@JohnSmith",
    content : "This is my #firstpost",
    likes : 300,
    reposts : 21,
    tags : ["@adam", "@Ali"]
}
console.log(post.likes);
// *********************************************************************************************************************




// ************************************   Q No.2    *********************************************************
//  Perform the following operation on existing objects  => change city name , add a new property gender, change the age , delete any property 
// Creating an object 
const student = {
    name : "Abdullah Ahmad",
    age : 22,
    city : "Bahawalpur",
    marks : 92.32
}
// Changing the city name
student.city = "Lahore";
console.log(student.city); // City is updated to new city lahore 
// Adding a new property gender in student object 
student.gender = "Male";
console.log(student.gender); // New property gender added in student object 
// Deleting a property from student Object 
delete student.marks
console.log(student); // Marks property is deleted from student object 
// *********************************************************************************************************************



