const password = 12344
let AccountName = "Usama Naeem"
var AccountEmail = "Usama@gmail.com"
accountRegion = "Lahore"
let AccountState;
// password = 09382   // for const not allowed

AccountName = "UserName"
AccountEmail = "UserName@gmail.com"
accountRegion = "World"

console.log(password);

// console.log(AccountName);

// for getting output in table for all variables used console.table
console.table([password, AccountName, AccountEmail, accountRegion, AccountState])

// ===================== 
/* don't use var
because of issue in block and functional scope */

