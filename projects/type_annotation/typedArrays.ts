const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// Helps with inference when extracting values

const myCar = carMakers[0];

// Prevent incompatible values
carMakers.push(100);

// Help with map, ect

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types

const importantDates: (string | Date)[] = [new Date(), "2030-10-10"];
