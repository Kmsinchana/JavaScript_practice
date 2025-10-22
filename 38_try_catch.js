//try and catch are used for handling the run time error
// if the code in try block is sucessfully run then catch block will not get executed
try {
    let res = 10/0;
    // javaScript doesn’t show an arithmetic error for /0 because it treats it as a valid mathematical result (Infinity), not as an exceptional situation.
    console.log("result",res)
    console.log(x) //this will be an error control will be passed to catch block
    console.log("Hi") //this will not get executed
} catch (error) {
    console.log(error.message)
}

//
function division1(a,b){
    try {
        if(b==0) throw ("the number cannot be zero") //i can throw direct message only
        let result = a/b
        console.log(result)
    } catch (error) {
        console.log("error",error)
    }
}
division1(6,0)

//to handle the division by zero condition i can use
function division2(a,b){
    try {
        if(b==0) throw new Error("the number cannot be zero from error message") //i can throw error
        let result = a/b
        console.log(result)
    } catch (error) {
        console.log("error",error.message) //to display the message i need to use error.message
    }
}
division2(6,0)


//finally
// he finally block runs whether or not an error occurred.
function division3(a,b){
    try {
        if(b==0) throw new Error("the number cannot be zero from finally block") //i can throw error
        let result = a/b
        console.log(result)
    } catch (error) {
        console.log("error",error.message) //to display the message i need to use error.message
    }finally{
        console.log("It will execute always")
    }
}
division3(6,4)
