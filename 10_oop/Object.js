function multipleBy5 (num) {
        return num * 5 ;
}
// function is function and object both in js

multipleBy5.power = 3 ;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser (username, score) {
        this.username = username; //this keyword refers to the current instance of user
        this.score = score;
}

createUser.prototype.increment = function () {
        this.score++ ;
}

createUser.prototype.printUser = function () {
        console.log("user " + this.username +" has a score of "+ this.score );
}

const userOne = new createUser("Hulk", 234);
const userTwo = new createUser("Spider Man", 23);

userOne.increment();
userOne.printUser();