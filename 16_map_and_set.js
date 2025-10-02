//The Map object holds key-value pairs and remembers the original insertion order of the keys.

let mapdata = new Map()
//map.set(key,value) to store the value

mapdata.set(1,'num')
mapdata.set('1','string')
mapdata.set(true, 'boolean')
// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:


//boolean indicating whether an element with the specified key exists or not.
//input key
console.log(mapdata.has(1))

//Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
console.log(mapdata.get('1'))  //string


//iteraation in maps

//he for...in loop doesn't work as expected on Map objects in JavaScript because it's designed to iterate over enumerable properties of an object, not the elements of a Map.

//for in loop no output
for (const key in mapdata) {
   console.log(key)    
}

//for of loop

for (const key of mapdata) {
    console.log(key)
}
//output
// [ 1, 'num' ]
// [ '1', 'string' ]
// [ true, 'boolean' ]

//to get list of all keys
for (const key of mapdata.keys()) {
    console.log(key)
}

//to get all the values
for (const value of mapdata.values()) {
    console.log(value)
}


//to get the pair of key and value we can use
//for each will ecept the function as input(remember to see the 17file)
mapdata.forEach( (value,key)=>{
    console.log(`the key and values are ${key}:- ${value}`)
} )



//to convert the object to map we can use object.entity
//in object the keys will get converted into strings
let obj1 ={
    names: "xyz",
    age:15,
}

let mapFromObject = new Map(Object.entries(obj1))
console.log(mapFromObject.get('names'))


//set data structure

let setData = new Set()

setData.add("apple")
setData.add("papaya")
setData.add("pipeapple")
setData.add("apple")

//to find the size
console.log(setData.size)//3 

setData.forEach((value, valueagain,set)=>{
    console.log(value)  //he callback function passed in forEach has 3 arguments: a value, then the same value valueAgain, and then the target object. Indeed, the same value appears in the arguments twice.
})

// The same methods Map has for iterators are also supported:

// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys(), for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.