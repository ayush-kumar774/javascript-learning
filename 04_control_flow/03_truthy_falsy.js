const userEmail = "aksp8134@gmail.com";

// if (userEmail) {
//     console.log("Got user email");
// }
// else {
//     console.log("Don't have user email");
// }

// Falsy Values
// false, 0, -0, BingInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", 'false', " ", [], {}, function() {}

const emptyObj = {} ;
if (Object.keys(emptyObj).length === 0) {
    console.log("Empty object");
}