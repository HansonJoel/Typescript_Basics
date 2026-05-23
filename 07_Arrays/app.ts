// creeating arrays implicitly
let person = ["john", 28, "male", 1000, true];
let names = ["john", "mark", "steven"];
let birthYear = [1998, 1994, 2005];

// Creating arrays explicitly
let firstName: string[] = [];
firstName.push("eddy");
console.log(firstName);

let people: (string | number)[] = ["john", 28, "male", 1000]; // This array will accepts only add string and Numbers
people.push("mark");

console.log(people);

// for (let i of birthYear) {
//   console.log(i);
// }

// for (let i = 0; i <= birthYear.length; i++) {
//   console.log(birthYear[i]);
// }
