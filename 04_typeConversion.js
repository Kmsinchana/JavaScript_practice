//implicit conversion

let a= 10+"10"
console.log(a);  //output 1010(concatination)

let b = 10+true
console.log(b)    //output 11 

let c = "10"+true
console.log(c) // 10true(concatination)

let d = (10 =="10")
console.log(d)  //true

//explicit conversion

//let e ="123"
//let e = "123ab"
//let e = "true"
//let e = undefined
//let e = null
let e = true
let res = Number(e)
console.log(res) //123->123, 123ab->nan, "true"->nan, null->0, undefined -> nan, true ->1, false ->0

//let f = 45
//let f = true
//let f = null
let f = undefined
let res1 = String(f)
console.log(f) //45 ->45 , true->true, null->null, undefined ->undefined

//let g = 10
//let g = 0
//let g = null
//let g = undefined
//let g =""
let g ="name"
let res2= Boolean(g)
console.log(res2) //10->true, 0->false, null->false,undefined->false false ->false, ""->false,"name"->true

// operation in js

console.log(1+"2") // output is 12
console.log("2"+ 1 + 3) // o/p is 213
console.log(2+3+"1") // o/p is 51