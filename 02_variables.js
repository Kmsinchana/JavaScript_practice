const a=89;
let x= "sinchana"
var y= "k m"; // string
var k = 'avh' //string
z=67;
let i;
let j = null;
x="sinchana in ascendion"
console.table([a,x,y,i,z])

const synb = Symbol('123') //it will create a unique id
const synb2 = Symbol('123')

console.log(typeof synb)
console.log(synb2)
console.log(synb === synb2) //false 

let arr =['akash','abhi','basava']
console.log(typeof arr) //object

let obj ={
    name: "sinchana",
    age:22,
}
console.log(typeof obj) //object

const function1 = function(){ // i should use function() only
    console.log("hello")
}
console.log(typeof function1) // output is function but it is formally called as object function

console.log(typeof k)
console.log(typeof i) // return type is undefinde
console.log(typeof j) // this return type is object

//*************************************************************************/

//memory management

let memory1 = 10;
let memory2 = memory1;
memory2 = 30;

console.log(memory1)
console.log(memory2) //here the copy of memory1 will be given to memory2

let objectformemory = {
    email: "abc@gmail.com",
    number:989864847
}

let objectformemory2 = objectformemory
console.log(objectformemory2.email)
objectformemory2.email ="sinchu@gmail.com"
console.log(objectformemory2.email)
console.log(objectformemory.email) // refernece of both objectformemory and objectformemory2 are same
//You’re not changing "abc@gmail.com" — that string is still immutable.
//Instead, you're making the object’s email property point to a new string "sinchu@gmail.com".
objectformemory2.email.replace("s","a")
console.log(objectformemory2.email)
console.log(objectformemory.email)
//this doesn't work strings are immutable
//The object is mutable, so we can change its property to point to a different string value.



// var is not block-scoped it may lead to loss of some important data as it will get assigned with new value easily
let newx= 'a'
var newy ='b'
const newz = 'c'

if(true){
    let newx = 3;
    var newy = 4    //here the value of newy will get updated and the pevious value will get lost  so thats why we say var is not a block scoped we need to try avois it
    const newz =5
}

    console.log(newx)
    console.log(newy)
    console.log(newz)
