function sayMyName () {
    console.log(`My name is John.`);
}

//sayMyName();

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// };

// const result = addTwoNumbers(3, 4);
// console.log("Result: " , result); // It will print undefined since we are not returning anything from function

function addTwoNumbers(number1, number2) {
    // let result = (number1 + number2);
    // return result;
    return (number1 + number2);
};

const result = addTwoNumbers(3, 4);
// console.log("Result: " , result);

function loginUserMessage(username = "Aayush") {
    if (!username) {
        console.log("Please enter a username");
        return ;
    }
    return `${username} just logged in`;
};
// console.log(loginUserMessage()); 
// console.log(loginUserMessage("Aayush")); 

function calculateCartPrice(...num1) {
    return num1;
};

// console.log(calculateCartPrice(200, 400, 500)); // [ 200, 400, 500 ]

const user = {
    username: "Hitesh",
    price: 199
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
};

// handleObject(user);
// handleObject({
//     username: "Sam",
//     price: 200
// })

const newArray = [200, 300, 400, 500];

function returnSecondValue(getArray) {
    return getArray[1] ;
}

// console.log(returnSecondValue(newArray));
// console.log(returnSecondValue([200, 300, 400, 500]));