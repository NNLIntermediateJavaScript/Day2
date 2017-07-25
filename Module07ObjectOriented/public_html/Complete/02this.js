/*
 * FileName:  Complete/02this.js
 * Topics: 
 *      this KeyWord
 */
console.log("FileName:  Complete/02this.js");

/* 
 * Topic:  this KeyWord
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  this KeyWord");
console.log("****************************************************************");

// Note: this can vary depending on how it is called
// Global call
console.log("");
console.log("Global call");
function thisFunction() { console.log(this); }
thisFunction();                                                                 // Window {...} since the window object or global scope made the call to thisFunction()

// Object call
console.log("");
console.log("Object call");
var obj = {};
obj.thisFunction = function() { console.log(this); }
obj.thisFunction();                                                             // Object{thisFunction: function} since obj invoked the function


// Global variables referencing object functions
console.log("");
console.log("Global variables referencing object functions");
var callFunction = obj.thisFunction;
callFunction();                                                                 // Window {...} since it was called from the global scope again!
// Note: This can happen with callbacks but probably different object scopes not global


// Nested function scopes
console.log("");
console.log("Nested function scopes");
var obj2 = {
    outerFunction: function() {
        console.log(this);                                                      // Object{outerFunction: function}
        function nestedFunction() { console.log(this); }                        // Window{...}
        nestedFunction();
    }
}
obj2.outerFunction();                                                           
// This happens because JS loses scope of this when in a nested function
// Note: This happens a lot with events, setTimeout(), or closures


// Note: Ways to fix these issues
// 
console.log("");
console.log("Store a copy of this");
var obj3 = {
    outerFunction: function() {
        console.log(this);                                                              // Object{outerFunction: function}

        // Here is the important bit
        var that = this;                            
        function nestedFunction() { console.log(that); }                                // Object{outerFunction: function}
        nestedFunction();
    }
}
obj3.outerFunction();                                                                   // that keeps a reference to previous this scope


// or use call(), apply(), or bind()
// Note: this allows passing or storing of the this scope to be used
console.log("");
console.log("or use call(), apply(), or bind()");
var obj4 = {
    outerFunction: function() {
        console.log(this);                                                              // Object{outerFunction: function}
        function nestedFunction() { console.log(this); }                                // Object{outerFunction: function}

        // These are the important bits
        // Note: call() and apply() are identical except call() takes comma delimited list of function arguments
        nestedFunction.call(this); 
        // Note: and apply() takes an array of function arguments for 2nd parameter                 
        nestedFunction.apply(this);   
        // Note: bind() does not call the function immediately, but will use that same this scope for every future call              
        var bindNestedFunction = nestedFunction.bind(this);
        bindNestedFunction();
    }
}
obj4.outerFunction();
