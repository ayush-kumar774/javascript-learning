//-------------------- for of --------------

// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "Hello World!";
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

// Maps
// const map = new Map();
// map.set('IN', "INDIA");
// map.set('USA', "AMERICA");
// map.set("USSR", "RUSSIA");
// console.log(map);
// console.table(map);

// for (const values of map) {
//     console.log(values);
// }

// for (const [key, value] of map) {
//     console.log(key, ' :- ', value);
// }


//-------------------- for in --------------

// const programming = ["JS", "RB", "PY", "JAVA", "CPP", "RS"];
// for (const key in programming) {
//     // console.log(key); // This will print index of all the elements

//     console.log(programming[key]);
// }

// for in does not work on maps



//-------------------- for each --------------

const coding = ["JS", "RB", "PY", "JAVA", "CPP", "RS"];
// coding.forEach(function (item) {
//     console.log(item);
// } );

const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0 ;
// numbers.forEach( (nums) => {
//     sum += nums;
// } );
// console.log(`The sum of the elements of the arrays = ${sum}`);

function printElements (item) {
    console.log(item);
};

// coding.forEach(printElements); // We can even pass the reference of any function in forEach.

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } ); // It does have access to every item in array, indexes and the entire array.

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    }
];

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )