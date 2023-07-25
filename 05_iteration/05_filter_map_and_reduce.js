// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) =>  (num > 4) ); // implicit return.
// console.log(newNums);

// const newNums2 = myNums.filter( (num) => {
//     return num > 4 ; // explicit return.
// } );
// console.log(newNums2);

// const newNums = [];
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// });
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
];

let userBooks = books.filter( (bk) => (bk.genre === 'History'));
userBooks = books.filter( (book) => (book.publish > 2006) );
// console.table(userBooks);


///////////////////////// MAP ///////////////////////

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map ( (num) => {
//     return num + 10 ;
// });

// const newNums = myNums
//                     .map ( (num) => num * 10) // this will return array elements as 10
//                     .map ( (num) => num + 1) // this will return array elements as 11, 21
//                     .filter( (num) => num >= 40) ;

// // console.log(myNums);
// console.log(newNums);


///////////////////////// REDUCE ///////////////////

const arr = [1, 2, 3];

// const myTotal = arr.reduce( function (accumulator, currentValue) {
//     console.log(`accumulator : ${accumulator} and current value : ${currentValue}`);
//     return accumulator + currentValue
// }, 0);
// console.log(myTotal);


// const total = arr.reduce( (acc, curr) => acc + curr, 0);
// console.log(total);

const shoppingCart = [
    {
        itemName : "JavaScript Course",
        price: 2999
    },
    {
        itemName : "React Course",
        price: 3999
    },
    {
        itemName : "Three JS Course",
        price: 4999
    },
    {
        itemName : "MERN Course",
        price: 29999
    }
]

const shoppingCartBillingAmount = shoppingCart.reduce( (acc, curr) => acc + curr.price , 0);
console.log(`Total amount = ${shoppingCartBillingAmount}`);
