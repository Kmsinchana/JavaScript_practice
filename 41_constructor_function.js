//object literals
let useObjliteral = {
    name:"sinchana",
    age :56,
    email :"abc@gmail.com",
    getname : function(){
        console.log(`hello my name is ${this.name}`)
    }
}
//console.log(useObjliteral.getname()) //you are getting indefined as output because the function is not returning any value
//to make it not to mention undefined we can use
useObjliteral.getname()

//constructor function
// Constructor functions technically are regular functions.There are two conventions though:
// 1.They are named with capital letter first.
// 2.They should be executed only with "new" operator.

function User (name, age, isLoggedIn){
    //console.log(this) //this will be empty this
    this.name = name
    this.age = age
    this.isLoggedIn = isLoggedIn
    this.MyName = function(){
        console.log(`hi my name is ${this.name}`)
    }
    //console.log(this)
    return this //this is optinal
}
//for normal function calling  the value of second user get overide in the global context
//here it will be called as normal function, hence there will be no MyName function in it we can't access MyName we get an error
// let firstUserWithoutNew =  User("sinch",22,true)
// let secondUserWithoutNew =  User("hemu",43,false)
// console.log(firstUserWithoutNew) //we will get the global context with second user updated valur

let firstUser = new User("sinch",22,true)
let secondUser = new User("hemu",43,false)
firstUser.MyName()

// When a function is executed with new, it does the following steps:
// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.

function UserName(name,age){
    this.name = name
    this.age = age
    return this.name //this will be ignored
    //we get name and age as output
}

let userNaming = new UserName("ssss",88)
console.log(userNaming)

function UserName2(name,age){
    this.name = name
    this.age = age
    return { name} 
}

let userNaming2 = new UserName2("ssss2",88)
console.log(userNaming2)


//instanceOf opertor
// The instanceof operator in JavaScript is a binary operator used to test if an object is an instance of a specified constructor or class
// object instanceof constructor
console.log(firstUser instanceof User) //true
console.log(firstUser instanceof Object) //true
console.log(firstUser instanceof Function) //false
console.log(firstUser == secondUser) //false
let thirdUser = new User("sinch",22,true)
console.log(firstUser == thirdUser)  //false eventhough they have same field  different memory allocation
//we need to compare their name and age perticularly
console.log(firstUser.name == thirdUser.name) //true



//function prototyping
function protoFunction(name,age){
    this.name = name 
    this.age = age
    console.log(`my name is ${this.name} and age is ${this.age}`)
}

protoFunction.prototype.incrementAge = function(){
    return this.age+1
}

//if we din't use new keyword then we get the below error
// Cannot read properties of undefined (reading 'incrementAge')
let newAge = new protoFunction('sinch',22);
console.log(newAge.incrementAge())

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/