/*
In Function Return Type, a function return type specifies the type of value that a function should return.

It is written after the parameter list and before the opening curly brace.

Basic Syntax:

function functionName(): returnType {
  // code
}

*/
function add(a, b) {
    return a + b;
}
var addition = add(5, 2);
console.log(addition);
// Returning a String
function greet(name) {
    return "Hello, ".concat(name); // The function must return a string.
}
greet("John");
function getUser() {
    return {
        name: "John",
        age: 28,
    };
}
// Functions That Return Nothing (void)
function logMessage(message) {
    console.log(message);
}
