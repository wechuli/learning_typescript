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
const coordinates = JSON.parse(json);
console.log(coordinates);
