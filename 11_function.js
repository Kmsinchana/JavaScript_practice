//function declaration

function myFunction(){
    console.log("hello")
}
//calling the function

myFunction();

//Function Expressions

const sampleFunctionExpression = function(){
    console.log("hello from function expression")
}

sampleFunctionExpression()


//passing the parameter

function addTwoNumber(num1, num2){
     return num1+num2
}

//const result = addTwoNumber(2,5)
const result = addTwoNumber(2,) //output will be NaN
console.log(result)


//allow all student who are above 18

function voterAge(age){
    //method 1
    // if(age>18){
    //     return `voter age`
    // }
    // else{
    //     return `you are still a child`
    // }
    //method2
    return( age>18? `voter age`: `you are still a child`)
    //if the function doesn't perform any activity it will return undeined
}

const msg = voterAge(6)
console.log(msg)


//if we have multiple inputs coming as input and we doesn't know the count we can use below method it will store the value in array format

function infiniteValue(...number){
    return number
}

console.log(infiniteValue(89,908,92,283,383,29,282,4))


function infiniteValue2(nub1,nub2,...number){
    return number
}

console.log(infiniteValue2(89,908,92,283,383,29,282,4)) //this will leave the first two number because it is stored as nub1 and nub2

//to pass the object for the function

const sampleObject ={
    username: "sinchana",
    age:22
}

function passingObject(passobject){
    console.log(`user name is ${passobject.username} and age is ${passobject.age}`)
}

passingObject(sampleObject)


//#################### intresting ####################

console.log(addOne(4)) //possible case

function addOne(nub){
    return nub+1
}

console.log(addTwo(22));  //this will give an error Cannot access 'addTwo' before initialization

const addTwo = function(nub){
    return nub+2
}


