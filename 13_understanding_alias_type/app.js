// Basic Syntax
var value;
// This means:
// value can be a string OR a number
var id;
id = 101;
id = "A102"; //Both are valid.
// id = true; // Error    But this is not valid because boolean is not part of the union
var user = null;
function getUser() {
    var uname = "john";
    var uage = 28;
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
function format(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
format("Hello");
