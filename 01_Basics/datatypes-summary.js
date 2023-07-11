// Primitive (Call by value) are stored in Stack.
/*
1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol(ES6+)
7. BigInt
*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

// console.log("score", typeof score); // number
// console.log("isLoggedIn", typeof isLoggedIn); // boolean
// console.log("outsideTemp", typeof outsideTemp); // object
// console.log("userEmail", typeof userEmail); // undefined

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);
// console.log(typeof id);


const bigNumber = 683628964836n;
// console.log(`bigNumber: ${typeof bigNumber}, Value:${bigNumber}`);

// Non-primitive (Reference type) are stored in HEAP.
/*
1. Arrays
2. Objects
3. Functions
*/

const heros = ["Shaktiman", "Naagraj", "Doga"];
let myObj = {
    name: "Aayush",
    age: 21,
    hobbies: ['reading', 'coding'],
    address: {
        streetName:"Kothrud",
        city: "New Delhi"
    }
};
const myFunction = function greet() {
    console.log("Hello");
};

// console.table(heros);
// console.table(myObj);
// myFunction();
// console.log(typeof myFunction);


// Stack(Primitive) 

let petName = "Rocky";
let anotherPetName = petName;
anotherPetName = "Raja";

console.log(`Petname = ${petName} and Another Petname = ${anotherPetName}`) ;

// Heap(Non primitive)

let userOne =  {
    firstName : "John",
    lastName : "Doe",
    emailId : "johndoe@gmail.com"
}

let userTwo = userOne;

userTwo.emailId = "johndoe@yahoomail.com";

console.log(`User one email id ${userOne.emailId}
User two email id  ${userTwo.emailId}`); // Both the values will