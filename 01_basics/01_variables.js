const accountId = 144553 
let accountEmail = "soumyadip@google.com"
var accountPassword = "67890"
accountCity = "Contai"
let accountState;

// accountId = 2 // not allowed


accountEmail = "sm@sm.com"
accountPassword = "21212121"
accountCity = "Kolkata"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
