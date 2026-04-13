// type aliases
type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 11 };

// types aliases for  primitives
type ID = string | number;

let userId: ID = "yash123";
let productId: ID = 123;

// type aliases vs  interface
// interfaces can be extended, type aliases cannot
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let myDog: Dog = {
  name: "buddy",
  breed: "golden retriever",
};

// interfaces can be declared  multiple time and will merge
interface Animals {
  name: string;
}
interface Animals {
  age: number;
}

let dog: Animals = {
  name: "buddy",
  age: 13,
};

// use interface for object shapes,
// type aliases for union/intersections

interface User {
  name: string;
  age: number;
}

type UserID = string | number;
