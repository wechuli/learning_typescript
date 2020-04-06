class HoldAnything<T> {
  data: T;
}

const holdString = new HoldAnything<string>();
const holdNumber = new HoldAnything<number>();

holdNumber.data = 34;

holdString.data = "dsds";

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const myNumberArray = new ArrayOfAnything<number>([1, 2, 54, 44, -43]);
console.log(myNumberArray.get(3));

// Generics with functions

function printStrings(arr: string[]): void {
  arr.forEach((word) => {
    console.log(word);
  });
}

function printNumbers(arr: number[]): void {
  arr.forEach((no) => {
    console.log(no);
  });
}

const numberArray = [232, 323, 44, 23];
const stringArray = ["323", "4343", "anything"];

function printAnything<T>(arr: T[]): void {
  console.log("....................");
  arr.forEach((item) => {
    console.log(item);
  });
  console.log("....................");
}

// calling the function with generics

printAnything<string>(stringArray);
printAnything<number>(numberArray);

// Generic constrains

class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface IPrintable {
  print(): void;
}

function printHousesOrCars<T extends IPrintable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars([new Car(), new House()]);
