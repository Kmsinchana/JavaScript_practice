//this keyword
//using this with object
//The value of this in a regular function depends entirely on how the function is called — not where it's defined. Let’s explore the different scenarios.
//scenario1
let testingThisUse = {
    username: "sudha",
    age : 77,
    gender : "female",
    getNameAndAge : function(){
        console.log(`${this.username} welcome to the website and your age is sweet ${this.age}`);
        //console.log(`${testingThisUse.username} welcome to the website and your age is sweet ${testingThisUse.username}`);
        // we can use testingThisUse.username to get the name
        //Technically, it’s also possible to access the object without this, by referencing it via the outer variable:
        console.log(this) // this will give the all the details about the object(current context)
    }
}

testingThisUse.getNameAndAge();
//but using objcet name the code will be not reliable
//try this with the testingThisUse.username code
// we will get the error Cannot read properties of null (reading 'username')
//if we try with this it will work
//structure before assigning null
// testingThisUse  --->  Object A
// Admin           --->  Object A
//structure after assigning null
// testingThisUse  --->  null
// Admin           --->  Object A

let Admin = testingThisUse
testingThisUse = null
Admin.getNameAndAge()

//in IDE (Node.js)
console.log(this) //output is {}

//In Node.js, the top-level this in a module refers to module.exports, not the global object.
//In the browser, the top-level this in global scope refers to the global object, which is window.

//senario 2
//calling this without the object
//normal function in non strict mode
function usingThisOutsideTheObject(){
    let username = 'sinchu'
    console.log(this)
    console.log(this.username) //output will be undefined
    //let → it does not become a property of the this object(it pointing to gloabl object).
}

usingThisOutsideTheObject() // Node.js or IDE: logs global
//Browser (non-strict mode): logs window

//senario 3
//se this code in 03_usestrict
// 'use strict';
// function showThisStrict() {
//     console.log(this);
// }
// showThisStrict();

//*******************arrow cunction*****************************//

//it same as function remove function name and add =>
//Arrow functions don't bind their own this — they inherit it from their parent scope.
//Do not have their own this
//They inherit this from their surrounding lexical scope (i.e., where they were defined)
// So if you're in the global scope:

//explisit return
const creatingArrow = () =>{
    console.log(this) // output will be {} 
    // Browser: this is window
}

creatingArrow()

//eg

const newFunction = function (){
   let name= () =>{
        console.log("arrow this function ",this)  // now this will be inherited from function and it will be global user
    }
    name()
    console.log("normal this function ",this)
}

newFunction()

//implesit return

const implisitReturn =(num1,num2)=> console.log(num1+num2)

implisitReturn(8,9)
//console.log(implisitReturn(8,9))

//we can write in this way as well
const newWay = (nub1,nub2)=>(nub1+nub2)

console.log(newWay(3,4))

//when we need to return object implicitly, wrap it in parentheses:
const getUser = () => ({ name: 'Sinchu', age: 25 });  //if we write only this {} it will this its a function definition

console.log(getUser())

//for single parameter no need of () paranthesis
const multiply = x => x*2

console.log(multiply(2))

