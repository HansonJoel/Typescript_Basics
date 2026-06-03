/*
In Function Return Type, a function return type specifies the type of value that a function should return.

It is written after the parameter list and before the opening curly brace.

Basic Syntax:

function functionName(): returnType {
  // code
}

*/

function add(a: number, b: number): number {
  return a + b;
}

const addition = add(5, 2);
console.log(addition);

// Returning a String
function greet(name: string): string {
  return `Hello, ${name}`; // The function must return a string.
}

greet("John");

// TypeScript Catches Errors
/*
function greet(name: string): string {
  return 100; // ❌ Error
}

Error because the function is expected to return a string, not a number.
*/

// Using a Type Alias
// Instead of writing the object type inline:

type User = {
  name: string;
  age: number;
};

function getUser(): User {
  return {
    name: "John",
    age: 28,
  };
}

// Functions That Return Nothing (void)
function logMessage(message: string): void {
  console.log(message);
}
