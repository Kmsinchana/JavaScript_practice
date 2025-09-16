console.log("Hi Everyone")
// adding the semicolon before ([ brackets
// here it will try to assign function to a if we doesn't add the semicolon
//error we ge without semicolon
/*TypeError: 8 is not a function
    at Object.<anonymous> (C:\Users\DELL\Desktop\Java_Script_practice\JavaScript_practice\01_test.js:5:1)
*/
let a = 8;
(function(){
    console.log("hello function")
})()