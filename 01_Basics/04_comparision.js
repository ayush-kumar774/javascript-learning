// console.log("2" > 1) ;
// console.log("02" > 1) ;

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); 
// true 
// Reason is comparision(<, >, >=, <=) and equality check(==) works differently. Comparison convert null to a number, treating it as 0.

console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0); 
console.log(undefined <= 0); 

