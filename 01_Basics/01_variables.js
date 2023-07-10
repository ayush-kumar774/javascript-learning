const accountId = 144553 ;
let accountEmail = "aayush.kumar@gmail.com" ;
var accountPassword = "12345" ;
accountCity = "Gopalganj" ;
let accountState;

accountEmail = "ak@gmail.com";
accountPassword = "32243232" ;
accountCity = "Bengaluru" ;

/*
Prefer not to use var, because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// accountId = 2
// console.log(accountCity);
// console.log(typeof(accountCity));