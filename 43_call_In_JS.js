//.call function in js
function setUserName(name){
    this.name = name
    console.log('set user executed')
}

function setAge(name,age){
   // setUserName(name)//this will give only age property the name will be not set
    //when the function is called inside the other function it will get called but when its execution is completed the setUserName will get removed from execution context and the value set for the user will also get removed
    //so we nedd to use the .call method to store the execution context
    //.call() will Call a function with a specific this value and optionally pass arguments individually.
    setUserName.call(this, name)
    this.age = age
}

let nameAge = new setAge("abc",23)
console.log(nameAge)


//we can pass the argument as well in .call() method

const setValue = {
    display : function(city,state){
        console.log(`full name ${this.firstName} ${this.secondName} and city :${city},state: ${state}`)
    }
}

let person1 ={
    firstName : "mah",
    secondName : "k"
}
let person2 = {
    firstName : "ved",
    secondName : "c"
}
setValue.display.call(person1,'ckm','karnataka')
setValue.display.call(person2,'ckm','karnataka')

// .apply is also same but we pass the argument in the form of array
setValue.display.apply(person1,["ckm",'karnataka'])