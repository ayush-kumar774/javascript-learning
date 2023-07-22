const user = {
    username: "Aayush",
    price: 999,

    welcomeMessage: function () {
        console.log(`Welcome ${this.username}! Your total cost is $${this.price}`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Saurabh";
// user.welcomeMessage();
// console.log(this);

// Global object inside browser is Window object.

// function one() {
//     let username = "Aayush";
//     console.log(this.username); // it will print undefined this keyword does not work inside the function, it works inside the objects.
//     console.log(this);
// }

// one();

////////////////// ARROW FUNCTIONS ///////////////////////////////////

// const printUsername = () => {
//     let username = "Aayush";
//     console.log(this.username); // it will print undefined this keyword does not work inside the function, it works inside the objects.
// }

// printUsername(); 

const addTwo = (num1, num2) => {
    return num1 + num2 ; // explicit return
}

const addTwoNumber = (num1, num2) => (num1 + num2) ; // implicit return

const newObject = (username) => ({name : username});

console.log(addTwo(4, 5));
console.log(addTwoNumber(7, 8));
console.log(newObject("Aayush"));