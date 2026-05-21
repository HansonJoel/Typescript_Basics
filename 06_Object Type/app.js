var person = {
    name: "John",
    age: 30,
};
person = { name: "Mark", age: 33 };
console.log(person);
var person1 = {
    name: "John",
    age: 30,
};
person1 = { name: "Mark", age: 33 };
// console.log(person1.gender);  // This will return an error in typescript because gender property does not exist
console.log(person1.name);
console.log(["age"]);
// nested object
var person3 = {
    name: "Steven",
    age: 30,
    address: {
        city: "London",
        country: "Uk",
    },
};
console.log(person3.address);
console.log(person3.address["city"]);
