//class creation 
//it is a feature from ES6
class Car{
    constructor(name,year){
        this.name = name
        this.year = year
    }
    //method in js
    yearOld(){ 
        // date = new Date() this won't work weneed to follow tge strict mode rules 
        let date = new Date()
        return date.getFullYear()-this.year
    }
}

//creating the object fort the classes
let car1 = new Car("omini",2015)
console.log(car1.yearOld())


//inheritance
//it is usefull for code reusability, reuse the properties and method of an existing class when you create a new class
class Animal {
    constructor(name){
        this.name = name
    }
    namingAnimal(){
        return `${this.name}`
    }
}

class cat extends Animal{
    constructor(name,sound){
        super(name) //method refer to the parent class
        //this will call the parent constructor method and gets access to the parent properties and method
        this.sound = sound
    }
    say(){
        return `${this.namingAnimal()} make a sound as ${this.sound}`
    }
}
//we first need to declare the class for using that
let defineCat = new cat("cat","meow.. meow...")
console.log(defineCat.say())


//we can use gettier and settter in classes

class newCar{
    constructor(_name,year){
        this._name = _name
        this.year = year
    }
    yearOld(){
        // date = new Date() this won't work weneed to follow tge strict mode rules 
        let date = new Date()
        return date.getFullYear()-this.year
    }
    get name(){
        return this._name
    }
    set name(value){ //setter will take only one parameter we can't pass two parameter
        this._name = value
    }
}

let carassign = new newCar('ford',2013)
//wrong syntax we get the error as
// carassign.name("benz")
//           ^
// TypeError: carassign.name is not a function
// carassign.name("benx")
//**************getter and setter cannot be called as function*************
carassign.name = "benx" 
console.log(carassign.name)


//static method
// static method are defined on the class itself
// you cannot call a static method on a object, only on a object class

class CreatingStaticCar{
    constructor(name){
        this.name = name
    }
    static sayHello(x){
        return `hello ${x}`
    }
}

console.log(CreatingStaticCar.sayHello("sinch")) //allowed
let accessinStatic = new CreatingStaticCar("ford")
// below way gives console.error
// accessinStatic.sayHello is not a function
// console.log(accessinStatic.sayHello("abc"))

//if we dosen't use the class we should nedd to create the each function(say yearOld) and need to assign that the the function for newcar with prototype method  