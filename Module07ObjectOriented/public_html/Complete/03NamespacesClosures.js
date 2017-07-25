/*
 * FileName:  Complete/03NamespacesClosures.js
 * Topics: 
 *      Namespaces
 *      Closures
 *      Revealing Module Pattern
 */
console.log("FileName:  Complete/03NamespacesClosures.js");

/* 
 * Topic:  Namespaces
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Namespaces");
console.log("****************************************************************");

var Utility = {
    handyDandy: function() { console.log("handyDandy() called"); },
    superUseful: function() { console.log("superUseful() called"); }
};

Utility.anotherOne = function() { console.log("handyDandy() called"); };

Utility.handyDandy();
Utility.superUseful();
Utility.anotherOne();


/* 
 * Topic:  Closures
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Closures");
console.log("****************************************************************");

console.log("");
console.log("Counter Dilemma");

// Counter should be encapsulated into add function
var counter = 0;
function add1() { counter++; return counter; }
console.log(add1()); console.log(add1()); console.log(add1());                  // 1 2 3

// But this resets counter each time
function add2() { var counter = 0; counter++; return counter; }
console.log(add2()); console.log(add2()); console.log(add2());                  // 1 1 1 

// Closures to the rescue
var add3 = (function() {
    var counter = 0;
    return function() { counter++; return counter; }
})();
console.log(add3);                                                              // function() { counter++; return counter; }
console.log(add3()); console.log(add3()); console.log(add3());                  // 1 2 3 


/* 
 * Topic:  Revealing Module Pattern
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  Revealing Module Pattern");
console.log("****************************************************************");

var gradesObject =  (function() {
    // Private
    var myGrades = [93, 95, 88, 0, 55, 91];

    // return all public things
    return {
        average: function() {
            var total = 0;
            myGrades.forEach(
                function (value, index, arrayName) { total = total + value; });
            return Math.floor(total / myGrades.length);
        }
    }
}());
console.log('Your grade average is ' + gradesObject.average());                 // Your grade average is 70


var gradesRevealing =  (function() {
    // Private until revealed
    var myGrades = [93, 95, 88, 0, 55, 91];

    var average = function() {
        var total = 0;
        myGrades.forEach(
                function (value, index, arrayName) { total = total + value; });
        return Math.floor(total / myGrades.length);
    };

    // Reveal public members here
    return { average: average }

}());
console.log('Your grade average is ' + gradesRevealing.average());              // Your grade average is 70
