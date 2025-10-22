// // a Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. It acts as a placeholder for a value that will be available in the future. 
// let promiseOne = new Promise(function(resolve,reject){
//     //used for data base 
//     //fetching data, reading a file, waiting for a timer
//     //executor code . When new Promise is created, the executor runs automatically.

//     setTimeout(() => {
//         console.log("the promise executed sucessfully")
//         resolve(); //to specify that action is completed and contolled is passed to then
//     }, 1000);
// })

// //handler for the promises .then for resolve
// promiseOne.then(()=>{
//     console.log("then is executed")
// })


// // we can write without function naming

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("the promise executed sucessfully without function registration")
//         resolve();
//     }, 1000);
// }).then(function(){
//     console.log("inside the then without function registration")
// })

// //.catch and finally in promises
// //this code is executed first before all the code above(observation)
// let promiseTwo = new Promise((resolve,reject)=>{
//     let boolean = true
//     if(boolean){
//         console.log("resolve successfully")
//         resolve()
//     }else{
//         console.log("rejected the responce")
//         reject()
//     }
// }).then(()=>{
//     console.log("in the then")
// }).catch(()=>{
//     console.log("in the catch")
// }).finally(()=>{
//     console.log("it will get execte always")
// })

// //i can pass the object as input to resolve

// let promiseThree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("the promise executed sucessfully")
//         resolve(({userName: "sinch",Email: "sincha@Example.com"}));  //we can pass the object
//     }, 1000);
// }).then((resolve)=>{
//     console.log(resolve.userName)
//     return resolve  //it will return the data into next then
// }).then((data)=>{
//     console.log(data.userName)
// })

// fetch() is a built-in JavaScript function used to make HTTP requests (like GET, POST, PUT, DELETE) to servers or APIs — usually to retrieve or send data.
// It immediately returns a Promise, which represents a future value — the server’s response.


// fetch('https://api.github.com/users')
// .then(responce=>{
//     return responce.json()
// }).then((data)=>{
//     data = data.filter((item) =>{
//         if(item.login === 'jamesgolick'){
//             console.log(item)
//         }
//     })
// })
// .catch(error=> console.log('error while fetching the data', error.message));

//using promises with async await
async function getData(){
    try{
        let dataFromURL = await fetch('https://api.github.com/users')
    let dataInJson = await dataFromURL.json()
    console.log(dataInJson)
    }catch(error){
        console.log("error occured",error)
    }
}
getData();