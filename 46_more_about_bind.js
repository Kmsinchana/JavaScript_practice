//bind does not call the function immediatly.
//instead it returns a new function with fixed this value and optional arguments
const setValue = {
    display : function(city,state){
        console.log(`full name ${this.firstName} ${this.secondName} and city :${city},state: ${state}`)
    }
}

let person1 ={
    firstName : "mah",
    secondName : "k"
}
let person2 = {
    firstName : "ved",
    secondName : "c"
}

setValue.display.call(person2,'ckm','karnataka') //immediatly invoked
const bindvalue = setValue.display.bind(person1, "ckm",'karnataka')
bindvalue() //call later
