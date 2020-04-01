import fs from "fs";
import { MatchReader } from "./MatchReader";
import { CSVReader } from "./csvReader";
import MatchResult from "./MatchResult";

// create an object that satisfies the 'DataReader' interface

const csvReader = new CSVReader("football.csv");

// create an instance of MatchReader and pass in something satisying the DataREader interface

const matchReader = new MatchReader(csvReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log("Man United won ", manUnitedWins, "games");
