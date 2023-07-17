// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc" ;
tinderUser.name = "Sam" ;
tinderUser.isLoggedIn = false ;

// console.log(tinderUser);

const regularUser = {
    email: "samuel@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Aayush",
            lastname: "Kumar"
        }
    }
};

// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {
    1 : "A",
    2 : "B"
};

const obj2 = {
    3 : "C",
    4 : "D"
};

const obj3 = {
    5 : "E",
    6 : "F"
};

// const obj3 = { obj1 , obj2 }; --> This will create a object inside a object
// console.log(obj3.obj1[1]);

// const obj4 = Object.assign({}, obj1, obj2, obj3); // target and source are the parameters

// This is the best approach
const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

const users = [
    {
        id : 1,
        email : "aayush@gmail.com" 
    },
    {
        id : 2,
        email : "aayush@protonmail.com" 
    },
    {
        id : 3,
        email : "aayush@google.com" 
    },
    {
        id : 4,
        email : "aayush@tutanota.com" 
    }
]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh Choudhary"
};

const {courseInstructor} = course; // this is called de-structuring
const {courseInstructor: instructor} = course; // we can even define our own variable for accessing the de-structed element.
// console.log(instructor, " " , courseInstructor);