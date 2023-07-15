// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate); // OBJECT
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());

// let myCreatedDate = new Date(2023, 0, 23);
// console.log("My created date is:", myCreatedDate.toDateString()); // Months start from 0 in javascript

// let myCreatedDateWithTime = new Date(2023, 0 , 23, 15, 3);
// console.log(`My created date with time ${myCreatedDateWithTime.toLocaleString()}`);

// let myCreatedDate = new Date("2023-07-15");
// myCreatedDate = new Date("01-14-2023");
// // console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000)); // seconds

let newDate = new Date();
console.log(newDate);
console.log(`Date = ${newDate.getDate()}`);
console.log(`Month = ${newDate.getMonth() + 1}`); // starts from zero
console.log(`Year = ${newDate.getFullYear()}`);
console.log(`Day = ${newDate.getDay()}`); // starts from zero i.e. sunday

newDate.toLocaleString ( 'default', {
    weekday: "long",
});