//maps
//It does not change the original array — it returns a new one.
//.map() always returns an array of the same length
let array1 = [1,2,3,4,5,6,7,8,9]

const value = array1.map(num => num*2)

console.log(value)

//i can use nultiple map and filter

const multiValue = array1
                        .map(num => num*2)
                        .map(num => num+1)
                        .filter(num => num>10)

console.log(multiValue)


//reduce
// Reduce an array to a single value — like a number, object, string, or even another array — by applying a function to each element from left to right.
//it takes two input one is accumilator and other one is current value

let reduceValue = [1,2,3]

//we can calculate the sun of the above array

const total = reduceValue.reduce(function (accumilator,currentValue){
    console.log('accumilator',accumilator,'current value',currentValue);
    return accumilator+currentValue;
},0) //accumilator will get assigned with this number
console.log(total)

//iteraton 1
//acc->0, cuurval->1 (curr value is the value of array for each index)
//iteration 2
//acc->1(0+1), currval->2

//arrow function

const val = reduceValue.reduce((acc,curr)=> acc+curr,2)

console.log(val)


//this can be used to check the the frequency of element

let arr = ['a','b','a','c','b']

let accurance = arr.reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1  //for first iteration acc[a] will be undefined
    return acc
},[])

console.log(accurance)