//more about object
//we can get the description of the object 
let desobj = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(desobj)
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// This means:
// You cannot modify Math.PI.
// You cannot delete it(congigurable means).
// You won’t see it when looping through Math’s properties(enumerable means).
// If configurable = false 
// it’s locked forever.
// You cannot change writable, enumerable, or configurable again

//i can check for the object that i will create
const sym = Symbol('hidden')
let obj = {
    name:"abc",
    age :30,
    [sym] : 43,
    display : function(){
        console.log('display')
    }
}
let desOfName = Object.getOwnPropertyDescriptor(obj,'name')
console.log(desOfName)
Object.defineProperty(obj,'name' ,{
    enumerable : false
})

//this will return the array of ket and value
//it will return only the age not name because we made enumerable false
for (const [key,value] of Object.entries(obj)) {
    console.log(`${key} and ${value}`)
}
// for function we will get output as
// display and function(){
//         console.log('display')
//     }
//to make function not to come
for (const [key,value] of Object.entries(obj)) {
    if(typeof value !== 'function'){
    console.log(`${key} and ${value}`)
    }
}

//this will written all the keys(with enumerable string as well) of object 
console.log(Object.getOwnPropertyNames(obj))
//this will written key with out enumerable string 
console.log(Object.keys(obj))

//both 2 method does't return the symbol
//we have seperate function
console.log(Object.getOwnPropertySymbols(obj))