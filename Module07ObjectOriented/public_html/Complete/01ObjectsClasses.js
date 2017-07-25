/*
 * FileName:  Complete/01ObjectsClasses.js
 * Topics: 
 *      Object Initializer / Object Notation
 *      new Keyword and Constructor Functions
 *      Object.create()
 *      ES6 class Keyword
 */
console.log("FileName:  Complete/01ObjectsClasses.js");

/* 
 * Topic:  Object Initializer / Object Notation
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Object Initializer / Object Notation");
console.log("****************************************************************");

var fred1 = { 
  firstName: "Fred", 
  lastName: "Flintstone", 
  kind: "Person", 
  name: function() { return this.firstName + " " + this.lastName; } 
};
var barney1 = { 
  firstName: "Barney", 
  lastName: "Rubble", 
  kind: "Person", 

  // Note:  Concise syntax
  // IE11:  Not Supported
//  name() { return this.firstName + " " + this.lastName; }

  name: function() { return this.firstName + " " + this.lastName; } 
};

console.log(fred1);                                                             // Object {firstName: "Fred", lastName: "Flintstone", kind: "Person"}
console.log(fred1.name());                                                      // Fred Flintstone
console.log(barney1);                                                           // Object {firstName: "Barney", lastName: "Rubble", kind: "Person"}
console.log(barney1.name());                                                    // Barney Rubble


/* 
 * Topic:  new Keyword and Constructor Functions
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  new Keyword and Constructor Functions");
console.log("****************************************************************");

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.kind = "Person";
  this.name = function() { return this.firstName + " " + this.lastName; };
}

// Create objects using Constructor function
var fred2 = new Person("Fred", "Flintstone");
var barney2 = new Person("Barney", "Rubble");

console.log(fred2);                                                             // Person {firstName: "Fred", lastName: "Flintstone", kind: "Person"}
console.log(fred2.name());                                                      // Fred Flintstone
console.log(barney2);                                                           // Person {firstName: "Barney", lastName: "Rubble", kind: "Person"}
console.log(barney2.name());                                                    // Barney Rubble


/* 
 * Topic:  Object.create()
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Object.create()");
console.log("****************************************************************");

var fred3 = Object.create(fred1);
var barney3 = Object.create(barney2);
// Note: Creates a copy of the function
var PersonCopy = Object.create(Person);                                                 

// Note: Different than previous examples since Object.create() adds base object to __proto__
console.log(fred3);                                                             // Object {}
console.log(fred3.name());                                                      // Fred Flintstone
console.log(barney3);                                                           // Person {}
console.log(barney3.name());                                                    // Barney Rubble
console.log(PersonCopy);                                                        // Function {}


/* 
 * Topic:  ES6 class Keyword
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  ES6 class Keyword");
console.log("****************************************************************");

// Class Declarations
// Note: Methods must use concise syntax name() {} instead of name: function() {}
// Note: Class declarations are not hoisted
// Note: All code in a class run in strict mode
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// Note: Class methods are not enumerable
// Note: Class methods cannot not be called with new keyword since they lack a [[Construct]] method
// Note: Calling a class without new keyword throws an error

// IE11:  Not Supported
console.log("IE11:  ES6 class Keyword Not Supported");

//class PersonClass {
//    constructor(firstName, lastName) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.kind = "Person";
//    }
//    name() { return this.firstName + " " + this.lastName; }
//}
//var person1 = new PersonClass("Bam-Bam", "Rubble");
//console.log(person1.name());                                                    // Bam-Bam Rubble
//console.log(person1);                                                           // PersonClass {firstName: "Bam-Bam", lastName: "Rubble"}
//console.log(PersonClass);                                                       // class PersonClass {...}
//console.log(typeof PersonClass);                                                // function
