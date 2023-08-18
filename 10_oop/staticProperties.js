class User {
        constructor(username) {
                this.username = username;
        }

        logMe() {
                console.log(`Hello, ${this.username}!`);
        }

        static createId () {
                return ( ( Math.floor(Math.random() * 10000) ) + 1 );
        }

}

const user = new User ("Hitesh");
user.logMe();
// console.log(user.createId());  // it will throw error

class Teacher extends User {
        constructor(username, email, password) {
                super(username);
                this.email = email;
                this.password = password;
        }

        addCourse() {
                console.log(`A new course was addded by ${this.username}`)
        }
}

const teacher = new Teacher("Hitesh", "hitesh.choudhary@udemy.com", "123");
teacher.logMe()
// teacher.addCourse()
// console.log(teacher.createId()); // it will throw error