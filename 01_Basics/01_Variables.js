const account_id = 12232;
let account_email = "vishav@google.com";
var account_password = "12345";
let account_city = "Jaipur";


account_email = "akshay@google.com";
account_password = "54321";
account_city = "Delhi";

/* Prefer not to use var because of issue in block scope
 and function scope. It can create bugs in code. */

console.table([account_id, account_email, account_password, account_city]);

