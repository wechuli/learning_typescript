function someRandomFunction(array: number[]): number {
  let sum = 0;
  array.forEach((number) => {
    sum += number;
  });

  return sum;
}

function sendGreeting(greeting: string = "GoodMorning"): void {
  console.log(greeting);
}

console.log(someRandomFunction([1, 2, 3, 4, 5]));

let scores = [70, 125, 85, 110];
let highScores = [];

highScores = scores.filter((value) => value > 100);

const logMessage = (message: string): void => console.log(message);

function doSomethingOnArrays<T>(array: T[], value: T): T[] {
  const newArray = array.filter((item) => item != value);
  return newArray;
}
