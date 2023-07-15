const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966 ;
// console.log(otherNumber.toPrecision(4));

const num = 10000000;
// console.log(num.toLocaleString());
// console.log(num.toLocaleString('en-IN'));

// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);


// -------------------------- MATHS ------------------------

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // It will fetch value between 0 to 1 .
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10 ;
const max = 20 ;

console.log(Math.floor(Math.random() * (max - min + 1) + min)) ;