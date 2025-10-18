//for each will not return anything we will use filter to do the function

//filter
//Return only the items that pass a condition (return true).
let arr1 =[1,2,3,4,5,6,7,8,9]
//value greater than 5
const multArr1 = arr1.filter(item=> item>5)

console.log(multArr1)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//give all the book with genere fiction

const generaBook = books.filter((book)=>{
    // if(book.genre === 'Fiction')
    //     return book;
    //or 
    return book.genre ==='Fiction'
})


console.log(generaBook)

//books released between 1990 to 2010

const yearbook = books.filter((item)=>{
    // if(item.publish> 1990 && item.publish<2010)
    // {
    //     return item
    // }
    //or
    return item.publish> 1990 && item.publish<2010
})

console.log(yearbook)

//if we pass filter(boolean) the onlu truth value will be considere

let arr = ['1', 0, 'sinchu', null, "arr"]
console.log(arr.filter(Boolean))

//the output will be [ '1', 'sinchu', 'arr' ]