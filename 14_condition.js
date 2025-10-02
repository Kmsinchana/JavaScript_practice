//if
if(10>11){
    console.log("10 is greater than 11")
}
else{
    console.log("10 is not greater than 11")
}

//nester loop
let a=10
let b=20
let c=10
if(a>b){
    if(a>c){
        console.log("a is greater")
    }else{
        console.log("c is grater")
    }
}
else{
    if(b>c){
    console.log("b is greater")
    }
    else{
        console.log("c is grater")
    }
}

//without nested loop
if(a>b && a>c){
    console.log("a is greater");
}else if(b>a && b>c){
    console.log("b is greater")
}
else{
    console.log("c is greater")
}

//switch
let month = "february"
switch(month){
    case "january":
    case "february": // we can combine the two cases to give single output
        console.log("comibining the two cases")
        break;
     case "march":
        break;
     case "april":
        console.log("my birthday");
        break;
     default:
        console.log("not intrested in typing all month")
}

//truthy or false value

let someString = ""
if(someString){
    console.log("true")
}
else{
    console.log("false")
}
//false values are 
//0, false,"",null,undefined ,-0, BigInt On,NAN

//true value
//'false' ,"false",[],"0"

//nullish coalescing operator(??):
// It provides a concise way to handle default values for variables or expressions that might be null or undefined.

let firstName = "sinchana"
let middleName = null
let lastname = "K M"

let fullName = `${firstName}${middleName??''} ${lastname}`.trim()
console.log(`name to be displayed is ${fullName}`)

//another example

let number = 15?? null
console.log(number)

console.log(10??20??90) //first one will get print

//one more info

let num= null

console.log(num??=110)//here the num will get assigned with 110
console.log(num)  //110

//ternary operator
let x= 10
let y =20
console.log((x>y)?x:y)