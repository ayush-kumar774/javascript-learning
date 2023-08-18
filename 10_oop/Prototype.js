let myName = "Aayush     ";

// console.log(myName.length);


let myHeroes = ["Thor", "Spider Man"];

let heroPower = {
        thor : "Mjolnir",
        spiderMan: "Sling web",

        getSpiderPower : function () {
                // return this["spiderMan"] ;
                return this.spiderMan;
        },

        getThorPower : function () {
                return this["thor"];
        }
}

Object.prototype.sayMyName = function () {
        console.log(`Aayush is present in all objects.`);
}

Array.prototype.heyAayush = function () {
        console.log(`Aayush says hello!`);
}

// myHeroes.sayMyName();
// heroPower.sayMyName();
// myHeroes.heyAayush();
// heroPower.heyAayush(); // this will fail

// Inheritance

// const User = {
//         name : "JS Learner",
//         email : "learns@google.com"
// };

// const Teacher = {
//         makeVideo : true
// };

// const TeachingSupport = {
//         isAvailable : false 
// };

// const TASupport = {
//         assignment : 'JS Assignment',
//         fullTime : true,
//         __proto__ : TeachingSupport
// };

// Teacher.__proto__ = User; // Prototypal inheritance

// Modern Syntax
// Object.setPrototypeOf(TASupport , Teacher);

String.prototype.trueLength = function () {
        console.log(`${this}`);
        console.log(`True length is ${this.trim().length}`);
}

myName.trueLength();