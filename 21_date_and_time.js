//date and time

let date = new Date() //current date and time
console.log(date) //2025-10-03T08:57:40.200Z 
//The Z at the end stands for Zulu time, which means UTC (Coordinated Universal Time).
//Your time (2:29) is local time, likely UTC+5:30 (like in India — IST).
//Your local time is 08:57 + 5:30 = 14:27 (or 2:27 PM)
//new Date(milliseconds); // Time in ms since Jan 1, 1970
let birthday =new Date("2003-04-09"); // e.g., "2025-10-03"
console.log(birthday)
let birth =new Date(2003, 3, 9, 7, 30, 0, 0); //moths start with 0 if anything not mentioned it takses as 0
console.log(birth.toLocaleTimeString()) //to get the local time in string
//getter and setter methods
console.log(birthday.getFullYear())  //give the year 2003
console.log(birthday.getDate())    //to get the date 9
console.log(birthday.getDay())    //to get the day start with 0(sunday) 3 mean wednesday
console.log(birthday.getMonth())  //month start with 0(january) //3 means april

//set method
birth.setDate(10)
console.log(birth)


// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
// For instance:
// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getWeekDay(date) );        // should output "TU"

let date1 = new Date(2012, 0, 3)
//console.log(date1.toString())   //Tue Jan 03 2012 00:00:00 GMT+0530 (India Standard Time)
console.log(date1.toString().split(' ')[0].slice(0,2).toUpperCase()) //TU 
//Splits a string into an array of substrings, using a space (' ') as the delimiter.
// [
//   "Mon",        // [0]    split(' ') [0]
//   "Feb",        // [1]
//   "20",         // [2]
//   "2012",       // [3]
//   "00:00:00",   // [4]
//   "GMT+0000",   // [5]
//   "(UTC)"       // [6]
// ]

//.slice(start, end) returns a substring from start index up to (but not including) end
//this can be used for Time difference problems
let start = Date.now() //// milliseconds count from 1 Jan 1970
console.log(start)



//when you subtract two Date objects in JavaScript, the result is always in milliseconds.

//to get the remaining days from mu birth day

let lastDayOfTheYear = new Date(birthday.getFullYear(),11,31)
// console.log(lastDayOfTheYear)
let remainingDaysInMS = lastDayOfTheYear - birthday
//console.log(remainingDaysInMS) // output will be in ms
//get a ms in a day
let msInDay = 24*60*60*1000
//now divide remaining days in ns with the ms in day
let remainingDays = remainingDaysInMS/msInDay
console.log(Math.ceil(remainingDays)) //266 days


//i can manually add date 
let datenew = new Date("2025-10-29")
console.log(datenew.getDate()+3) 


//difference betwee ios and local date

console.log(date.toISOString()) //returns in UTC date in ISO format
console.log(date.toLocaleString()) //return in local formate 
console.log(date.getTimezoneOffset()) // e.g., -330 for IST


//ms in day is    1000*60*60*24
//ms in hor is     1000*60*60
//ms in min is     1000*60
//ms in sec is     1000

//for the time counter to get the remaining time
let targetTime = Date.now()+(1000*60*60*24) //24 hour ahead from current time
console.log(targetTime)

//to get the remaining time from now
setInterval(function(){
    let currentTime = Date.now();
    //both targetTime and currentTime both are in milli seconds
    let difference = targetTime - currentTime //in ms
    let remainday = Math.floor(difference/(1000*60*60*24)) 
    let remaininghour = Math.floor((difference%(1000*60*60*24))/(1000*60*60))
    let remainingMin = Math.floor((difference%(1000*60*60))/(1000*60))
    let remainigSec = Math.floor((difference%(1000*60))/1000)
    console.log(`days:${remainday} and time ${remaininghour} and minit ${remainingMin} and second ${remainigSec} `)
},1000)


