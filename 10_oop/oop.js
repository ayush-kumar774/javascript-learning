// const User = {
//         username: "Aayush",
//         loginCount: 8,
//         signedIn: true,

//         getUserDetails : function () {
//                 return this;
//         }
// };
// console.log(User.getUserDetails());

// const date = new Date();

function User (username, loginCount, isLoggedIn) {
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;

        this.greeting = () => {
                console.log(`Welcome Dear ${this.username}!`);
        }
        // return this; this line is optional 
}

const userOne = new User("Aayush", 12, true);
const userTwo = new User("Manu", 34, false);
userOne.greeting();
console.log(userTwo);