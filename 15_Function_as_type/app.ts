/*
In Function Type, a function type describes the shape of a function:

What parameters it accepts
What type it returns

This allows TypeScript to ensure that a function matches a specific signature.
*/

// syntax:
let myFunction: (a: number, b: number) => number;

/*This means:
The function must accept two numbers
The function must return a number
*/

// Valid Example
let add: (a: number, b: number) => number;

add = function (a, b) {
  return a + b;
};

console.log(add(2, 3)); // 5
// Valid because the function matches the specified type.

/*   Invalid Example
let add: (a: number, b: number) => number;

add = function (a, b) {
  return "Hello";
};

❌ Error because the function returns a string instead of a number.

*/
