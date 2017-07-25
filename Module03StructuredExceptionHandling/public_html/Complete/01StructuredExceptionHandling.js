/*
 * FileName:  Complete/01StructuredExceptionHandling.js
 * Topics: 
 *      Structured Exception Handling
 */
console.log("FileName:  Complete/01StructuredExceptionHandling.js");

/* 
 * Topic:  Structured Exception Handling
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Structured Exception Handling");
console.log("****************************************************************");

// Create an object type UserException
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

UserException.prototype.toString = function() {
  return this.name + ': "' + this.message + '"';
};

function flipOfBoom() {
    if (Math.floor(Math.random() * 2))
        throw new UserException("Boom!!");
    
    return "Survived!";
}

try {
    console.log("try");
    console.log(flipOfBoom());
} 
catch(e) {
    console.log("catch(e)");
    console.log(e);
    console.log(e.toString());
}
finally {
    console.log("finally");
}
