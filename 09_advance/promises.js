// Promise is an object

// const promiseOne = new Promise(function (resolve, reject) {
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function () {
//         console.log('Async task is complete');
//         resolve();
//     }, 1000)
// });

// promiseOne.then(function () {
//     console.log('Promise Consumed');
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task 2 is completed");
//         resolve()
//     })
// }).then(function () {
//     console.log("Async 2 resolved");
// })


// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: "Aayush", email: "aayush.kumar@acko.tech" })
//     }, 1000)
// })

// promiseThree.then(function (user) {
//     console.log(user.username);
//     console.log(user.email);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "Aayush", email: "aayush.kumar@acko.tech" })
//         }
//         else {
//             reject('ERROR: Something went wrong');
//         }
//     }, 1000);
// })
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(`Username ${username} has been retrieved`);
// }).catch(function (error) {
//     console.log(error);
// }).finally(() => console.log(`The promise is either resolved or rejected.`));

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ username: "JavaScript", email: "123" })
//         }
//         else {
//             reject('ERROR: JS went wrong');
//         }
//     }, 1000);
// });

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// };

// consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }

// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));