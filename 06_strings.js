const string1 = 'sinchana'
const string2 = ' km'
const place = 'ckm'

//old method
console.log(string1+ string2+ " from " + place)

//new way  using the backtick 
/* line one*/ const newway= `${string1}${string2} she is
from the beautiful place called ${place}`//line two
console.log(newway)
//to print the ` use \ 
console.log(`to use backtick \` `)

//another method to declare the string
//use the below two in inspect console then you can see the string functions in console window
const newstring = new String("hello world")
console.log(newstring)

let newstring2 = newstring
newstring2.replace("hello","b") // i cannot ise this because strings are immutable(once creted cannot be changed)
console.log(newstring)
console.log(newstring2)

//few functions for strings
console.log(newstring.length)
let trimstring = "          sinchu       "
console.log(trimstring)
console.log(trimstring.trim())  // we also have trimstart and trimend

console.log(newstring.charAt(1))
console.log(newstring.toUpperCase())
console.log(newstring.indexOf("o")) // The first "o" appears at index 4, If the character is not found, indexOf() returns -1
//it does not take negative value if it is given take that as 0
console.log(newstring.substring(-1,3))
console.log(newstring.substring(0,3)) // start with oth index print 3 character
console.log(newstring.substring(3)) //start with #rd index print all 

//slice this will take the negative value as well
console.log(newstring.slice(-5,-3))
//-5 means count 5 characters back from the end
//-3 means count 3 characters back from the end
console.log(newstring.slice(-3)) //last 3 charcter

console.log(newstring.search("l")) //return the first matching index
console.log(newstring.split("o"))
console.log(newstring.split("o",2)) //this will return 2 array which is split by o