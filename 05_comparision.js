console.log("1" == 1) //"1" will be conversted to anumber hence true
console.log("abc"== NaN) // false because nan is not equal to nan(nan is not equal to nan)
console.log(NaN == NaN) //false
console.log(true ==1) //Boolean is converted to a Number.
console.log("0" == false) //"0" == 0 → "0" → 0 hence true
//null is only loosely equal to:
//undefined
//itself (null)
console.log(null == null) ///true
console.log(null == undefined) //true
console.log(null == 0)  // false (no conversion happens herein loose eqaual comparision)
// Relational operators like <, >, <=, >= convert null to a number before comparison.
// null is converted to 0 when used in relational comparisons.
console.log(null > 0) //false
console.log(null >=0) //Uses a relational comparison (>=) Here, JavaScript does convert null to a number
console.log(undefined >= 0) //false because undefined is Nan 
console.log(0 == -0) //true

//strict comparision
console.log("3" === 3)