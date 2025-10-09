let allBox = document.querySelectorAll('.box')
// console.log(allBox)

allBox.forEach(function(box){
    //console.log(box)
    box.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target.id) //inside the target we get all information about the box, with the help of id we can get the color
        document.body.style.backgroundColor = e.target.id
    })
});

let button = document.querySelector('#refresh')
//console.log(button)

button.addEventListener('click',function(){
        window.location.reload() //this will reload the website we can pass the boolean(true means force reload or false reloads the page normally, possibly using cached files)
})