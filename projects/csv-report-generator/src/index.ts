import fs from "fs";
import { CSVReader } from "./csvReader";
import MatchResult from "./MatchResult";

const reader = new CSVReader("football.csv");

reader.read();

console.log(reader.data[0]);

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
