class User {
        constructor(username) {
                this.username = username;
        }

        logMe() {
                console.log(`Hello, ${this.username}!`);
        }
}

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
teacher.addCourse()
console.log(teacher instanceof Teacher);
console.log(teacher instanceof User);

const user = new User("Aayush");
// user.addCourse();// this will not work