const userInformationObject = {
    userFirstName: "sinchana",
    userLastName: "K M",
    userPhoneNumber: 89373937983,
    userAddress: "banglore",
    userSex: "female"
}
//method 1 for destructuring the object(normal method)
console.log(userInformationObject.userFirstName);
// method 2 this method will be used mainly in react js
const {userFirstName} =userInformationObject //or we can use differnt name
console.log(userFirstName); 
// or
const {userFirstName:firstName}=userInformationObject
console.log(firstName)

//destructing the array
const data =[
    {id:1, name:"sruthi"},
    {id:2, name:"varsha"},
    {id:3, name:"veda"}
]
//get all the names 
//  The map method calls the callbackfn function one time for each element in the array.
// this code will give the output of names as array formate
const names = data.map(({name})=> name)

console.log(names)

//if i need to return more than one value

const datavalue = data.map(({id, name:username})=>
         {
            return {id,username}
         }
) 

console.log(datavalue)