//In JavaScript, the prototype is a container for methods and properties. When methods or properties are added to the prototype of a function, array, or string, they become shared by all instances of that particular object type. 
//Prototype in general can be understood as a mould and all its instances can be considered as the car made from it.

let obj = {
    a : 10,
    c: 20
}

Object.prototype.display = function(){
    console.log(`inside the object to dispalay a and c ${this.a} and ${this.c}`)
}

obj.display()

// Every JavaScript object has a prototype, which contains shared methods and properties that all instances of that object can use. It's like a template for objects.
// When you add a method or property to an object’s prototype, all instances of that object automatically have access to it.
// In this example, the display() method is added to Object.prototype, so any object (like obj) can use it.
// Using prototypes helps you avoid repeating code. Instead of defining the same methods for each object, you define them once in the prototype, and all objects can use them. This makes your code more efficient.


//all object can access the object property
// In JavaScript, functions, arrays, and strings are all considered types of objects. 
// They are just specialized forms of the general object type. The Object type acts as the parent or base for these different object types. 
// All the other object type's like array's, functions and Strings are connected as a child to the Object through prototype.
let array = [1,2,3]
let string = 'xyz'
let object = {
    name : 'abc'
}
function newFunction(){
    console.log('hello from function')
}
Object.prototype.displayAll = function(){
    console.log(`I am shared method for the object prototype`)
}

//this all  will look for the parent prototype
array.displayAll() 
string.displayAll()
object.displayAll()
newFunction.displayAll()

//adding method for the array

Array.prototype.sum = function(){
    let sum=0
    for(let i=0; i<this.length; i++){
        sum += this[i]
    }
    return sum;
}

let arr1 = [3,2,1]
let arr2 = [9,10,11]

console.log(arr1.sum())
console.log(arr2.sum())


//inheritance
let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000,
  //old method
  //__proto__ : bed
};

//old method 
// pockets.__proto__ = bed

//new way
Object.setPrototypeOf(pockets,bed) //pocker inherit the property of bed
console.log(Object.getPrototypeOf(pockets)) //it will display the prototype object here its bed
console.log(pockets.money)
