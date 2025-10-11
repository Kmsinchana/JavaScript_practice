let hour = 0;
let min = 0;
let second = 0;
let timer = false;
let timerId;
//declare all dom value in const
const start = document.getElementById("start") 
const stopButton = document.getElementById('stop')
const resetBtn = document.getElementById('reset')
//this setInterval function will run for the interval we specify like 1000 means 1 sec

start.addEventListener('click',function(e){
    // console.log(e)
    if(!timer){ // it will prevent multiple interval of the start button when user click multiple times
    timer = true;
    timerId = setInterval(() => { // once the start button is pressed and we click on rest button in the background setInterval will leep on running
        //we need to store this setIntervalId and should call clearInterval(id) the it will stop running
    second++
    if(second === 60){
        second=0;
        min++;
    }
    if(min === 60){
        min=0;
        hour++
    }
    // console.log(second)
    // console.log(min)
    // console.log(hour)
    display()
    }, 1000);
}
});

function display(){
    document.getElementById('second').innerHTML = appendZeroAtStart(second)
    document.getElementById('minute').innerHTML = appendZeroAtStart(min);
    document.getElementById('hour').innerHTML = appendZeroAtStart(hour);
}

function appendZeroAtStart(time){
    return time<10 ?'0'+time :time.toString();
    //or we can use
    //return time.toString().padStart(2,'0')
}

resetBtn.addEventListener('click',function(){
    timer = false;
    //problem i faced without clearInterval is that eventhough i clicked reset it used to set the value to zero and the countdowun will begin eventhough i have not clicked the start button
    clearInterval(timerId) //this will stop the setInterval running in the background
    hour = 0
    min = 0
    second = 0
    display()
});

stopButton.addEventListener('click',function(){
    timer = false
    clearInterval(timerId);
})