let a = 300;

// if (true) {
//     let a = 10; // it will give the error message if accessed outside of the scope.
//     const b = 20;
//     var c = 30; // it is globally declared.
//     console.log("INNER A : ", a);
// };


// console.log("OUTER A : ", a); 
// console.log(b); 
// console.log(c);

function one() {
    const username = "Aayush" ;

    function two() {
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);
    two();
}

// one();

if (true) {
    const username = "Aayush";
    if (username === "Aayush") {
        const website = " youtube";
        console.log(username + website);
    }
}

// console.log(addOne(5)); // it will work 
function addOne(num) {
    return num + 1;
}

console.log(addOne(5));


// console.log(addTwo(5)); // Cannot access 'addTwo' before intitalization because we are holding it in variable.
const addTwo = function (num) {
    return num + 2 ;
}
console.log(addTwo(5));