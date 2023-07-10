let score = "33";
let score2 = "33abc"; // Number(NaN)
let score3 = null ; // Number(0)
let score4 = undefined; // Number(NaN)
let score5 = true; // Number(1)

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// valueInNumber = Number(score2);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// valueInNumber = Number(score3);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// valueInNumber = Number(score4);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

let isLoggedIn = 1 ; // Boolean(true)
// "Aayush" => Boolean(true)
// "" => Boolean(false)
// 2 => Boolean(true)
// 0 => Boolean(false)

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

let num = 33 ;

// let stringNumber = String(num) ;
// console.log(stringNumber);
// console.log(typeof stringNumber);

///////////////////////////// OPERATIONS ///////////////////////////////

// let value = 23 ;
// let negativeValue = -value ;
// console.log(negativeValue);

let str1 = "Hello " ;
let str2 = "World!" ;
let str3 = str1 + str2 ;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true); // It will convert it to number(1)
// // console.log(true+); // It will throw error.
// console.log(+""); // It will convert it to number (0)

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2 ;
// console.table([num1, num2, num3]);

let gameCounter = 100;
gameCounter++;
// console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

/*
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/

