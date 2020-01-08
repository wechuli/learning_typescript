let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in object
let now: Date = new Date();

//Arrays
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [12, 34, 344, 433.43, 23];
let truths: boolean[] = [true, false, false, true];

//Classes
class Car {}
let car: Car = new Car();

// Object literal
let person: {
  firstName: string;
  lastName: string;
  age: number;
  hasKids: boolean;
} = {
  firstName: "Paul",
  lastName: "Wechuli",
  age: 27,
  hasKids: false
};

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations

// 1) Function that returns the 'any' type

const json = `
{
    "x":10,
    "y":20
}
`;
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) When inference doesn't work

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // we can use a pipe operation to say a type can be either this or that

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    numberAboveZero = numbers[i];
  }
}
