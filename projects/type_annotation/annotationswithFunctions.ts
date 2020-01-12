const add = (a: number, b: number): number => {
  return a + b;
};

function multiply(a: number, b: number): number {
  return a * b;
}

const divide = function(a: number, b: number): number {
  return a / b;
};

function logger(message: string): void {
  console.log(message);
}

const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuring with Annotation

const todaysWeather: { date: Date; weather: string } = {
  date: new Date(),
  weather: "sunny"
};
// // const logWeather = (forecast: { date: Date; weather: string }): void => {
// //   console.log(forecast.date);
// //   console.log(forecast.weather);
// };
const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
