// Lexical scoping means the scope of a variable is determined by its position in the source code, i.e., where it was written, not where it is called.
// In simpler words:
// Inner functions can access variables defined in their outer functions.


function outerfunc(){
    name: 'xyx'
    function innerfunc(){
        console.log('name')
    }
    innerfunc()
}

let outfuc = outerfunc()

// closure
//A closure is the combination of a function and its lexical environment (variables from its outer scopes).
// In other words:
// A closure allows a function to “remember” variables from the place where it was created, even if it’s later executed elsewhere.

let e = 10
function sum(a){
    return function sum2(b){
        return function sum3(c){
            return function sum4(d){
                return a+b+c+d+e
            }
        }
    }
}

let lsum2 = sum(1) //this will return the sum2 function by remembering a as 1
let lsum3 = lsum2(2) //this will return the sum3 function by remembering a as 1 and b as 2
let lsum4 = lsum3(3)
let lsum5 = lsum4(4)

console.log(lsum5)

let totalsum = sum(1)(2)(3)(4) //when ever the function is called the whole lexical scope is passed means all the outer function variable also
console.log(totalsum)
