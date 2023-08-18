// ES6 ^

class User {
        constructor(username, email, password) {
                this.username = username ;
                this.email = email ;
                this.password = password ;
        }

        encryptPassword() {
                return(this.password + "abc123") ; 
        }

        changeUsername() {
                return (this.username.toUpperCase());
        }
}

const user = new User("Aayush", "aayush.kumar@acko.tech", "123");
console.log(user.encryptPassword());
console.log(user.changeUsername());

// Behind the scene

// function User (username, email, password) {
//         this.username = username ;
//         this.email = email ;
//         this.password = password ;
// };

// User.prototype.encryptPassword = function () {
//         return(this.password + "abc123") ; 
// };

// User.prototype.changeUsername = function () {
//         return (this.username.toUpperCase());
// };

// const user = new User("Aayush", "aayush.kumar@acko.tech", "123");
// console.log(user.encryptPassword());
// console.log(user.changeUsername());