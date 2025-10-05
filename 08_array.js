let fruits = ["Apple", "graphes", "strawberry", "orange"]
let vegitable = ["ladies finger", "tomato","potato","drumstick"]
console.log(fruits)
console.log(typeof fruits) //object
//to display the individual element
console.log(...fruits)
fruits.push("papaya") //add the papaya to the last index
console.log(fruits)
fruits.pop()    //pop the last element
console.log(fruits) 

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]) //each output come in new line
}
console.log(fruits.shift()) //returns the first element that is removed from the array
console.log(fruits.unshift("banana")) //returns the length of the array

console.log(fruits.join("-")) //the output is string and it will add the - as seperator between the character

let sliceop = fruits.slice(1,3) // copies elements from index 1 to 2 (3 not included)
console.log(sliceop)
console.log(fruits) //original array remains same

let spiceop = fruits.splice(1,3) // copies elements from index 1 to 2 (3 not included)
console.log(spiceop)
console.log(fruits) //the reaminig element after spice operation

//concatinating two arrays
let arr1 = new Array(1,2,3,4)
let arr2 = new Array(5,6,7,8)


let arr3 = arr1.concat(arr2,9,fruits) //concatinate the two array and return the new array
console.log(arr3)
//we can use spread operator to combine two array
console.log([...arr1, ...arr2])

// arr1.push(arr2) // output will be array within an array will be created[arr1,[arr2]]
// console.log(arr1)

console.log(Array.isArray(arr1))
let newaray=Array.of(9,0,"sinch") //Returns a new array from a set of elements.
console.log(newaray)
// .flat() returns a new array, and does not modify the original array.
let arrnes = [1,2,3,[4,5,[6,7]]]
console.log(arrnes.flat(1))//[1,2,3,4,5,[6,7]] depth means number of brackets its will reduce
console.log(arrnes.flat(2))//[1,2,3,4,5,6,7]

//.from
let str = "abcdefg"
let fromarray = Array.from(str)
console.log(fromarray)

let setnum = new Set([1,2,3,4])
let fromset = Array.from(setnum)
console.log(fromset)
console.log(Array.from(setnum, x=>x*2))