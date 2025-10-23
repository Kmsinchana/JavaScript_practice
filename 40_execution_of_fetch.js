setTimeout(function (){
    console.log('without fetch')
},1000)

// fetch will be highest preiority queue copared to other Web api call
fetch('https://fakestoreapi.com/products')
    .then(responce => responce.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
