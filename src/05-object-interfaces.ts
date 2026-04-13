// interface

interface User {
  name: string;
  age: number;
  email?: string;
  readonly id: number;
}

// object type annotation
let user: User = {
  name: "abe",
  age: 13,
  email: "abc@gmail.com",
  id: 13,
};

// user.id=11

// interface with method
interface Product {
  name: string;
  price: number;
  getDiscount(percent: number): number;
}

let laptop: Product = {
  name: "macbook",
  price: 100000,
  getDiscount(percentage: number): number {
    return this.price * percentage;
  },
};
