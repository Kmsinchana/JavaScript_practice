//object literals
const sumb = Symbol()
const obj1 ={
    name : "sinchana", //here name is is also string it will be as "name"
    "email": "sinchans@gmail.com", //other way
    [sumb]: "symb2", // way to access the symbol 
    phone : 9837364721,
    address: ["adress1","address2","address3"],
    isLoggedIn: true
}
//accessing 
console.log(obj1)
console.log(obj1.name)
console.log(obj1["name"])
console.log(obj1[sumb]) //if we use . the we get undefined as output

const funct1 = function(){
    console.log(`hello my name is ${obj1.name} and adrees is ${obj1.address[0]}`)
}
console.log(funct1()) //Since funct1() doesn't have a return statement, it implicitly returns undefined
funct1()

// Singleton pattern is a design pattern which restricts a class to instantiate its multiple objects. It is nothing but a way of defining a class. Class is defined in such a way that only one instance of the class is created in the complete execution of a program or project. 
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance; // Return the existing instance
    }
    Singleton.instance = this; // Save the instance
    this.data = "I am the only instance!";
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true

//object inside the object
const object1 ={
    age:67,
    fullname:{
        userfullname:{
            firstname:"sanjay",
            lastname:"patel"
        },
        developerfullname:{
            firstname:"sinchana",
            lastname:"KM"
        }
    },
    dob: "09/04/2003"
}
console.log(object1.fullname.developerfullname.firstname)
//we can freeze the object 
Object.freeze(object1)
object1.age = 99// we will not get any error but the change won't happen
console.log(object1.age) //this will not change the output we still get 67

//combining two object
// const object3 = Object.assign(obj1,object1) //the object1 will be concatenated with obj1
// console.log(object3 == obj1)
// const object2 =Object.assign({},obj1,object1) //{} is source and obj1 and object1 are the target
// console.log(object2)
//or
console.log({...obj1, ...object1})

//to het key and value in array formate

console.log(Object.entries(obj1)) //doesnot work for nested object

//to get only keys
console.log(Object.keys(object1))
// to get the value
console.log(Object.values(object1))