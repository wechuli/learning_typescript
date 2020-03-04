import { readCSV } from "./helpers/main";

const results = readCSV("football.csv");

results.then(data => console.log(data[0]));
