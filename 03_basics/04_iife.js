// Immediately Invoked Function Expression (IIFE)

// It is mainly used to avoid the pollution from global scope
// Syntax ()() --> we write the function inside the first paranthesis and second one is used for calling/execution of the function.

(
    function dbConnection() { // this function is having a name so it is named iife.
        console.log(`DB CONNECTED`);
    }
)();  
(
    () => { // this is simple iife.
        console.log(`ADDED CONNECTION USING ARROW FUNCTION`);
    }
)();

(
    (username) => {
        console.log(`Welcome ${username}!`);
    }
)("Ayush");