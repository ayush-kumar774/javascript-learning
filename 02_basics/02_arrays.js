const marvel_heros = ["Ironman", "Thor", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros); // It will add the entire arrays inside the marvel_heros array.
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeroes = marvel_heros.concat(dc_heros); // concat will add these two arrays and return a new arrays, with both the values, It take one argument.
// console.log(allHeroes);

const all_new_heros = [...marvel_heros, ...dc_heros]; // Spread operator - it will spread every elements of the arrays and then bind it all together
// It can take multiple arguments.
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [ 6, 7, [4, 5] ] ];

const usable_array = another_array.flat(2); // It will spread the element upto the depth passed as argument. We can even pass Infinity

// console.log(usable_array);

// console.log(Array.isArray("Aayush"));
// console.log(Array.from("Aayush"));
// console.log(Array.from({name: "Aayush"})); // Empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));