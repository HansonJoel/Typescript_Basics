// Basic Syntax
let value: string | number;

// This means:
// value can be a string OR a number

let id: string | number;
id = 101;
id = "A102"; //Both are valid.

// id = true; // Error    But this is not valid because boolean is not part of the union

let user: { name: string; age: number } | null = null;

function getUser() {
  const uname = "john";
  const uage = 28;
  user = { name: uname, age: uage };
  return user;
}

console.log(getUser());

/*Type Narrowing
When using union types, TypeScript may require you to check the type before using specific methods.

Example:
*/

// function format(value: string | number) {
//   console.log(value.toUpperCase()); // Error
// }

// Why?
// Because number does not have .toUpperCase().

// Solution: Narrow the Type
function format(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

format("Hello");
