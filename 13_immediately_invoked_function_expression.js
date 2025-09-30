//immediately invoked function expression
//They are typically used to create a local scope for variables to prevent them from polluting the global scope.
//normal function often they leave a function name in the global scope.
//One-Time Execution: IIFEs are executed only once, immediately after their definition. This is useful for initialization tasks or setting up a specific environment.
(function IIFE(){
    //named IIFE
    let username = "sinchana"; //stays private
    let password = "23433"
    console.log(`Inside IIFE user name is ${username}`)
})();
//we will get the below error if we does not use semicolon after the IIFE function
//  (intermediate value)(...) is not a function
(()=>{
    //unnamed IIFE
    console.log("inside arrow IIFE")
})()

//returning IIFE
const samplefunction=(function(a,b){
    return a+b
})(2,3) //passing the argument

console.log(samplefunction)

//same in arrow function 
const sampleArrowFunction = ((a,b) => a+b)(3,6)
console.log(sampleArrowFunction)