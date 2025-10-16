let randNumber = Math.floor((Math.random()*100)+1)
// console.log(randNumber)
const clikedbtn = document.getElementById('guessbtn')
let previousguess = document.getElementById('previousGuessList')
let displayRemainGuess = document.getElementById('remainguess')
let inutRandNum = document.getElementById('randnum')
const displayRandNum = document.getElementById('finalRandom')
let ganeOn = true
let prevGuessArray = []
let remsinGuess = 10;
clikedbtn.addEventListener('click',function(e){
    const inputNum = parseInt(inutRandNum.value)
    if(inputNum<=0 || isNaN(inputNum)){
        alert('Enter a valid number')
    }else if(inputNum>100){
        alert('Enter a number less than 100')
    }else{
        if(inputNum === randNumber){
           let message = `hurray! you have guessed it right..`
            alert(message)
            endGane()
        }else{
            remsinGuess--;
            if(remsinGuess<=0){
               displayRandNum.innerHTML = `the random number is ${randNumber}` 
               endGane() 
            }
            prevGuessArray.push(inputNum)
            displayMsg()
        }
    }
})

function displayMsg(){
   previousguess.innerHTML= prevGuessArray.join(',')
   displayRemainGuess.innerHTML = remsinGuess
   inutRandNum.value = ''
}

function endGane(){
    prevGuessArray = []
    ganeOn = false
    clikedbtn.disabled = true  //this is used to disabled the button
    inutRandNum.disabled = true
    let restOverBtn = document.createElement('button')
    restOverBtn.innerHTML = 'start over'
    restOverBtn.id = 'restart-id'
    displayRandNum.append(restOverBtn)
    restOverBtn.addEventListener('click',function(){
        restartGame()
        restOverBtn.remove() //removing the start over button
    })
}
function restartGame(){
    //again calculationg the random number
    randNumber = Math.floor((Math.random()*100)+1)
    prevGuessArray = []
    ganeOn = true
    remsinGuess = 10;

    //resetting the UI
    previousguess.innerHTML=''
    displayRemainGuess.innerHTML = remsinGuess
    displayRandNum.innerHTML = ''

    clikedbtn.disabled = false
    inutRandNum.disabled = false
}