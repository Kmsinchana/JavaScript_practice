//for each loop
 const coding = ['java','C++',"python",'java script']
 //copy the above line and enter coding in next line it will give you all the prototype of the array

//one famous most used prototype is for each
//when writing function inside the for each we need to skip the function name
coding.forEach( function (codingValue,index,codingarray){
    console.log(codingValue,index,codingarray)
})

//using arrow function

coding.forEach((value)=>{
    console.log(value)
})

//we can pass the function to foreach loop

function printCoding(item){
    console.log(item)
}

coding.forEach(printCoding) //don't execute the function just give name

const language =[
    {
        language:"Hindi",
        state: "Delhi"
    },
     {
        language:"kannada",
        state: "karnataka"
    },
     {
        language:"telgue",
        state: "tamil nadu"
    }
]
language.forEach((item)=>{
    //each item means one object
    console.log(item.language)
})

//return inside forEach only affects the callback, not the loop itself. You can't use break or continue
let arr1 = ['a','b','c','d','f']

arr1.forEach((item)=>{
    if(item==='b')
        return;
    console.log(item)
})
//a c d f it skipped b nor returned the from loop

//always remember that for each will not return anything