//for of loop(remember as of the value)
// Used to loop over:
// Values of an iterable
// Arrays, Strings, Maps, Sets, etc.
let arr1 = [1,2,3,4,5]
for (const element of arr1) {
    console.log(element)
}

//for strings

let string1 = "hello Word"

for (const char of string1) {
    console.log(char)
}

//for maps
const map = new Map([[1,"a"],[2,'b']])
for (const [keys,value] of map) {
    console.log(`${keys} and ${value}`)
}


//for in loops
//The for...in loop is designed to iterate over enumerable string properties of an object, including inherited ones.
//recommended for object
const obj1 ={
    name: "xyz",
    age :20
}
//to get key
for (const key in obj1) {
    console.log(key)
}

//to get a value

for (const key in obj1) {
   console.log(obj1[key])  
}


//for in loop not recommended for array

let arr2 =[5,6,7,8]

for (const key in arr2) {
    console.log(key)
}
//to get value
for (const key in arr2) {
    console.log(arr2[key])
}

//to acces the object through for of loop then see the file 47