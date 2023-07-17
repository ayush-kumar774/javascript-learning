// singleton --> Object created by using constructor. Object.create

// object literals

const mySymbol = Symbol("Key1");

const JsUser = {
    name: "John",
    "full name": "John Doe", // this is why we should prefer [] operator for accessing the properties of object
    age : 30,
    [mySymbol] : "myKey1", // symbols are represented in [] brackets. 
    location: "Jaipur",
    email: "john@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} ;

// console.log(JsUser.age);
// console.log(JsUser["location"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);

JsUser.email = "john@protonmail.com"; // updating the value of an existing property
// console.table(JsUser);

// Object.freeze(JsUser);
JsUser.email = "john@gmail.com"; // After freezing the element it won't give any error but the properties can not changed.
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greeting2 = function() {
    console.log(`Hello ${this.name}!`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2()); 
// The console is printing "undefined" because the greeting() and greeting2() functions do not have explicit return statements. \
// When a function does not return a value, JavaScript automatically returns undefined.