//-------------------- for in --------------
const programmingLanguages = {
    js    : "JavaScript",
    cpp   : 'C++',
    rb    : "Ruby",
    swift : "Swift By Apple"
};

// for (const key in programmingLanguages) {
//     console.log(key);
// }

for (const key in programmingLanguages) {
    console.log(`${key} shortcut is for ${programmingLanguages[key]}`);
}


// -------------------- for of --------------

const myObject = {
    name : "Aayush",
    age : 22,
    location : "HSR Layout"
};
// object is not iterable by this method
// for (const value of myObject) {
//     console.log(value);
// }