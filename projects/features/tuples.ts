const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

// type alias

type Drink = [string, boolean, number];

// const pepsi = ["brown", true, 40];

// This turns the array into a tuple
const pepsi: [string, boolean, number] = ["brown", true, 40];

// using a type alias
const coke: Drink = ["black", true, 50];
const tea: Drink = ["green", false, 0];


