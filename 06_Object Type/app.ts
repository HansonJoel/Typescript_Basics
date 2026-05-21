let person = {
  name: "John",
  age: 30,
};

person = { name: "Mark", age: 33 };
console.log(person);

let person1 = {
  name: "John",
  age: 30,
};

person1 = { name: "Mark", age: 33 };
// console.log(person1.gender);  // This will return an error in typescript because gender property does not exist

console.log(person1.name);
console.log(["age"]);

// nested object

let person3: {
  name: string;
  age: number;
  address: { city: string; country: string };
} = {
  name: "Steven",
  age: 30,
  address: {
    city: "London",
    country: "Uk",
  },
};

console.log(person3.address);
console.log(person3.address["city"]);
