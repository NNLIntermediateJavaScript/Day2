/*
 * FileName:  Complete/01RegularExpressions.js
 * Topics: 
 *      Regular Expressions
 */
console.log("FileName:  Complete/01RegularExpressions.js");

/* 
 * Topic:  Regular Expressions
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Regular Expressions");
console.log("****************************************************************");

// RegExp.exec(string)                  Searches string for match, returns array or null
// RegExp.test(string)                  Tests string for match, returns boolean
// String.match(pattern)                Searches String for match, returns array or null
// String.search(pattern)               Tests String for match, returns index of match of -1
// String.replace(pattern, newString)   Searches String for match, and replaces with newString
// String.split(pattern)                Uses pattern to break String into array of substrings

// Phone Number
console.log("");
console.log("Phone Number");

let phonePattern = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/; 
console.log(phonePattern);
console.log(typeof phonePattern);

let phone = "123-456-7890";
if (phonePattern.test(phone))  
    console.log("Your phone number " + phonePattern.exec(phone)[0] + " is valid."); 
else console.log(phone + " is not a valid phone number!");  
console.log(phone.replace(/-/gi, "."));

// Email
console.log("");
console.log("E-Mail");

// From http://emailregex.com/
emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
console.log(typeof emailPattern);
let email = "fred@slate.com";
if (email.search(emailPattern) >= 0)  
    console.log("Your email address " + email.match(emailPattern)[0] + " is valid."); 
else console.log(email + " is not a valid email address!");  

// Split
// Example from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
console.log("");
console.log("Split");

let names = 'Fred Flintstone ;Barney Rubble; Wilma Flintstone ; Betty Rubble ;';
let pattern = /\s*;\s*/;
let nameList = names.split(pattern);
let bySurnameList = [];
pattern = /(\w+)\s+(\w+)/;

for (let i = 0; i < nameList.length; i++) {
  console.log(nameList[i]);
  bySurnameList[i] = nameList[i].replace(pattern, '$2, $1');
  console.log(bySurnameList[i]);
  console.log("");
}
