/*In TypeScript Literal Type, a literal type is a type that allows only one specific value, rather than a whole category of values.
For example:
*/

let direction: "left";

direction = "left"; // ✅ Allowed

// direction = "right"; // ❌ Error

// Here, the type is not string; it is specifically the string "left".

// String Literal Types
let status: "success";
status = "success"; // ✅
// status = "error"; // ❌

// Only "success" is allowed.

// Number Literal Types
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 4; // ✅
// diceRoll = 7; // ❌

// Only the specified numbers are allowed.

// Boolean Literal Types
let isEnabled: true;
isEnabled = true; // ✅
//isEnabled = false; // ❌

// Only true is allowed.
