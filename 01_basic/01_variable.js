const accountId = 144553
let accountEmail = "vishal@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;   //not assign thatsway udefined

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "patna"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
