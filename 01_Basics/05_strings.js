const name = 'Aayush' ;
const repoCount = 23 ;

// console.log(name);

// console.log(`Hello my name is ${name} and my repo count on github is ${repoCount}`);

const gameName = new String("Call of Duty");
// console.log(gameName);
// console.log(typeof gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length) ;
// console.log(gameName.toUpperCase());
// console.log(gameName);

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4); // we can even pass negative value here in substring but it will start from 0 only. If we pass second param as negative values it will print empty string
// console.log(newString);

// const anotherString = gameName.slice(-12, 4); // If we do not pass the length of the string with negative value as first parameter, it will print blank.
// console.log(anotherString);

// const newStringOne = "             Aayush              " ;
// console.log(newStringOne) ;
// console.log(newStringOne.trim())

const url = "https://google.com/Elon%20Musk";
console.log(url.replace('%20','-'));
console.log(url.includes('gool'));

console.log(gameName.split(' '));