//all setTimeout,setInterval all are example of async execution in js

//setTimeOut ->it will execute only once
console.log("hi")
function asuncExecute(){  
    console.log("inside the set Time out function")
}
setTimeout(asuncExecute,3000)
//this setTimeout will get executed only once
console.log("after the function call")
//i can use clearTimeOut to stop this timeOut


