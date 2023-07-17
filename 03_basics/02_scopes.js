let a = 300;

if (true) {
    let a = 10; // it will give the error message if accessed outside of the scope.
    const b = 20;
    var c = 30; // it is globally declared.
    console.log("INNER A : ", a);
};


console.log("OUTER A : ", a); 
// console.log(b); 
// console.log(c);