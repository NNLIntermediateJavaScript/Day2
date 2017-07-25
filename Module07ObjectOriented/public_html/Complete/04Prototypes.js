/*
 * FileName:  Complete/04Prototypes.js
 * Topics: 
 *      Prototypes with Object Initializer / Object Notation
 *      Prototypes with new Keyword and Constructor Functions
 *      Prototypes with Object.create()
 *      ES6 extends Keyword
 */
console.log("FileName:  Complete/04Prototypes.js");

/* 
 * Topic:  Prototypes with Object Initializer / Object Notation
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Prototypes with Object Initializer / Object Notation");
console.log("****************************************************************");

var fred1 = { 
    firstName: "Fred", 
    lastName: "Flintstone", 
    kind: "Person", 
    name: function() { return this.firstName + " " + this.lastName; } 
};
console.log(fred1);                                                             // Object{firstName: "Fred", kind: "Person", lastName: "Flintstone"}
console.log(fred1.name());                                                      // Fred Flintstone

// Checking Prototypes
console.log(Object.getPrototypeOf(fred1));                                      // Object{}
console.log(fred1.__proto__);                                                   // Object{}


/* 
 * Topic:  Prototypes with new Keyword and Constructor Functions
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Prototypes with new Keyword and Constructor Functions");
console.log("****************************************************************");

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
//  this.kind = "Person";
//  this.name = function() { return this.firstName + " " + this.lastName; };
}

// New: Moved down from Constructor Function for better code reuse by adding properties to prototype object
// Note: prototype only applies to functions and when used with new keyword
Person.prototype.kind = "Person"; 
Person.prototype.name = function() { return this.firstName + " " + this.lastName; };

// New: Or shortcut
Person.prototype = {
  kind: "Person",
  name: function() { return this.firstName + " " + this.lastName; }
}

// Create objects using Constructor function
var fred2 = new Person("Fred", "Flintstone");
console.log(fred2);                                                             // Object {firstName: "Fred", kind: "Person", lastName: "Flintstone"}
console.log(fred2.name());                                                      // Fred Flinstone

// New: Check out prototype
console.log(fred2.kind);                                                        // Person
console.log(Person);                                                            // function Person(firstName, lastName) {...}

// prototype of all objects that have a Person prototype
console.log(Person.prototype);                                                  // Object {kind: "Person", name: function, constructor: function}

// prototype of fred2                              
console.log(Object.getPrototypeOf(fred2));                                      // Object {kind: "Person", name: function, constructor: function}
console.log(fred2.__proto__);                                                   // Object {kind: "Person", name: function, constructor: function}


/* 
 * Topic:  Prototypes with Object.create()
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Prototypes with Object.create()");
console.log("****************************************************************");

// Create new object with fred1 as Prototype
var fred3 = Object.create(fred1);
console.log(fred3);                                                             // Object {firstName: "Fred", kind: "Person", lastName: "Flintstone"}
console.log(fred3.name());                                                      // Fred Flintstone


// Object to be used as Prototype
var person = {
  kind: "Person",
  name: function() { return this.firstName + " " + this.lastName; }
};

// Create new object with person as Prototype and add firstName and LastName
fred4 = Object.create(person, {
    firstName: { value: "Fred" },
    lastName: { value: "Flintstone" }
});
console.log(fred4);                                                             // Object {firstName: "Fred", lastName: "Flintstone"}
console.log(fred4.name());                                                      // Fred Flintstone


/* 
 * Topic:  extends Keyword
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  extends Keyword");
console.log("****************************************************************");

// IE11:  Not Supported
console.log("IE11:  ES6 extends Keyword Not Supported");

//class PersonClass {
//    constructor(firstName, lastName) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.kind = "Person";
//    }
//    name() { return this.firstName + " " + this.lastName; }
//}
//class StudentClass extends PersonClass {
//    constructor(firstName, lastName, grade) {
//        super(firstName, lastName);
//        this.grade = grade;
//    }
//    name() { return super.name() + " has a " + this.grade }
//}
//var fred5 = new PersonClass("Fred", "Flintstone");
//console.log(fred5.name());                                                      // Fred Flintstone
//console.log(fred5);                                                             // PersonClass {firstName: "Fred", lastName: "Flintstone", kind: "Person"}
//
//var fred6 = new StudentClass("Fred", "Flintstone", 55);
//console.log(fred6.name());                                                      // Fred Flintstone has a 55
//console.log(fred6);                                                             // StudentClass {firstName: "Fred", lastName: "Flintstone", kind: "Person", grade: 55}
