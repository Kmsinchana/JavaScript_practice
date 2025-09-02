let num = 89
console.log(num)

let numobject = new Number(20.989282)
console.log(numobject)

//to fixed
console.log(numobject.toFixed(4))
//to exponential(return type is string)
let cons = numobject.toPrecision(4) 
console.log(cons)
console.log(typeof(cons)) //string
console.log(numobject.toPrecision(1)) //If the number is very large or very small, toPrecision() might return the value in exponential notation.
//tolocalstring
let num1 = new Number(67819282)
console.log(num1.toLocaleString('en-IN', {style: 'currency', currency:'INR'})) // show the number in indian format

//dates 
let date = new Date()
console.log(date.toLocaleString('en-GB')) //21/07/2025
console.log(date.toLocaleString('en-GB',{year:'numeric',month:"long",day:"numeric"})) //21 July 2025

//to get the localtime
console.log(date.toString()) // iSD
//to get the UTC date
console.log(date.toUTCString())
//utc date in ISO standard
console.log(date.toISOString())
console.log(date.toDateString)
//Properties:
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.NaN)


//math function
//if we give input except number we will get NaN
let rand = Math.floor(Math.random() * 100) + 1; // to get the random number betwee 1 to 100 
console.log(rand)
//to make the value range between min and max value
let min =10
let max = 60
console.log(Math.floor(Math.random()*(max-min))+ min)

console.log(Math.floor(8.8)) //8
console.log(Math.floor(-5.9)) //-6
console.log(Math.floor("hello")) //Nan
console.log(Math.ceil(5.1)) //5
console.log(Math.ceil(-9.6)) //-9
console.log(Math.round(5.5555)) //6
console.log(Math.abs(-5)) //5
let arr= new Array(56,99,67,88,100)
//console.log(Math.max(arr)) //expects individual numbers as arguments, not an array ,gives Nan as output
console.log(Math.max(...arr))// spread operator (...) it expands an iterable (like an array) into individual arguments
