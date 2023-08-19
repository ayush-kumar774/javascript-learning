const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // it will also print the value of 3.14


const chai = {
        name : "Ginger Tea",
        price : 250,
        isAvailable : true,

        orderChai: function() {
                console.log("Please pay 250");
        }
}

// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (const [key, value] of Object.entries(chai)) {
        if (typeof value === 'function') {
                continue;
        }
        console.log(`${key} : ${value}`);
}

Object.defineProperty(chai, 'name', {
        writable: false,
        enumerable: false
});
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
console.log();

for (const [key, value] of Object.entries(chai)) {
        if (typeof value === 'function') {
                continue;
        }
        console.log(`${key} : ${value}`);
}