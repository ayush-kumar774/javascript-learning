// const myArr = [1, 2, 3, 4, 5, 6] ;
// console.log(myArr[0]);

// const superHeros = ["Iron Man", "Captain America", "Doctor Strange", "Thor", "Ant Man"];
// console.log(superHeros);

const myArr2 = new Array(1, 2, 3, 4);
// creates an array with the given arguments as elements in it

// myArr2.push(5);
// adds a value to end of arry (adds element at index n+1)
// console.log(myArr2);
// myArr2.push(6);
// console.log(myArr2);

// myArr2.pop(); // removes the last element
// console.log("After pop: ", myArr2);
// myArr2.shift(); // remove first elemnt and returns removed item

// myArr2.unshift(0); // add element on the first place and shifts the entire array to right
// console.log("After unshift: " ,myArr2);

// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(3));

// const newArr = myArr2.join(); // joins the array as string (comma seprated)
// console.log(myArr2);
// console.log(newArr);

// slice, splice

console.log("A " , myArr2);

const myn1 = myArr2.slice(1, 3); // It does not includes the last element and it return a copy of sub array. It does not affect the original array

console.log(myn1);
console.log("B " , myArr2);

const myn2 = myArr2.splice(1, 3); // It includes the range and manipulate the array, it cut out the range from original array.

console.log(myn2);
console.log("C " , myArr2);