const bmiForm = document.querySelector('.bmiform')
const result = document.getElementById('result')
// const weight = document.getElementById('weight')
//if we take height and weight here the value will be empty beacuse it will give the value when the page loaded
// const height = document.getElementById('height')
// console.log(bmiForm)
bmiForm.addEventListener('submit',function(e){
    // problem: after submitting the form the page used to reload we can able to see the output only for few seconds
    e.preventDefault() //it will prevaent the page from refreshing
    //use number instead of parseInt so that it can take decimal value
    // if we doesn't use Number with .value we get Nan
    const weight = Number(document.getElementById('weight').value)//here is fine
    // console.log(weight)
    const height = Number(document.getElementById('height').value)
    //convering height to m
    if(weight===''||height ==="" || isNaN(weight) || isNaN(height)){
        alert(`enter the currect value`)
        return;
    }
    let heightInMeter = height/100
    // console.log(height)
    let bmi = weight/(heightInMeter*heightInMeter)
    let resultFixed = bmi.toFixed(2)
    // result.innerHTML = resultFixed
    // if(resultFixed <18.5){
    // result.innerHTML+= ' you are under weight work on increasing the weight'
    // }else if(resultFixed >= 18.5 && resultFixed <= 24.5){
    //     result.innerHTML+= ' great! you have normal weight'
    // }else{
    //     result.innerHTML+= ' you are over weight workout for your health'
    // }
    // instead of above code use below code more optimized one
    let message = `your bmi is ${resultFixed}`
    if(resultFixed <18.5){
        message+= ` you are under weight work on increasing the weight`
    }else if(resultFixed >= 18.5 && resultFixed <= 24.9){
        message+= ' great! you have normal weight'
    }else{
        message+= ' you are over weight workout for your health'
    }
    result.innerHTML = message
})