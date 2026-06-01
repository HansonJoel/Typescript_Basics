/*
In Type Alias, a type alias is a custom name that you give to a type. It allows you to reuse complex types instead of writing them repeatedly.

You create a type alias using the type keyword.
*/

// Basic Syntax
type User = {
  name: string;
  age: number;
};

// Now User becomes an alias for that object type.

// Without a Type Alias
// Imagine you need the same object type in multiple places:

function printUser(user: { name: string; age: number }) {
  console.log(user.name);
}

let person: { name: string; age: number } = {
  name: "John",
  age: 28,
};

// Notice how { name: string; age: number } is repeated.

// With a Type Alias
type printUser1 = {
  name: string;
  age: number;
};

function printUser1(user: User) {
  console.log(user.name);
}

let person1: User = {
  name: "John",
  age: 28,
};

// The code is cleaner and easier to maintain.

// Real-World Example
type Product = {
  id: number;
  name: string;
  price: number;
};

const laptop: Product = {
  id: 1,
  name: "Dell XPS",
  price: 1200,
};

// If you later need to add a property, you update the alias once:
