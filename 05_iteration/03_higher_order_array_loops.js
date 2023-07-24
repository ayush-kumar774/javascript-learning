// for of

// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "Hello World!";
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

// Maps
const map = new Map();
map.set('IN', "INDIA");
map.set('USA', "AMERICA");
map.set("USSR", "RUSSIA");
// console.log(map);
// console.table(map);

// for (const values of map) {
//     console.log(values);
// }

// for (const [key, value] of map) {
//     console.log(key, ' :- ', value);
// }


// for in

const programming = ["JS", "RB", "PY", "JAVA", "CPP", "RS"];
for (const key in programming) {
    // console.log(key); // This will print index of all the elements

    console.log(programming[key]);
}

// for in does not work on maps