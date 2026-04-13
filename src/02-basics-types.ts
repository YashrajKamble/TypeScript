// primitive
let username: string = "yash";
let age: number = 20;
let isAdmin = true;

// Array
let numbers: number[] = [1, 2, 3];
let number2: string[] = ["yash", "raj"];

// tuple
let person: [string, number] = ["yash", 13];

// enums
enum Color {
  Red,
  Green,
  Blue,
}

let favoriteColor: Color = Color.Red;

// any (avoid when possible)
let randomValue: any = 10;
randomValue = "10";
randomValue = true;

// unknown (safer than any)
let userInput: unknown;
userInput = "abc";
userInput = 1;
userInput = true;

// void (for function that don't return )
function subscribe(message: string): void {
  console.log(message);
  //   return "typescript";
}

// null and undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;
