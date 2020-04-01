"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const csvReader_1 = require("./csvReader");
const MatchResult_1 = __importDefault(require("./MatchResult"));
// create an object that satisfies the 'DataReader' interface
const csvReader = new csvReader_1.CSVReader("football.csv");
// create an instance of MatchReader and pass in something satisying the DataREader interface
const matchReader = new MatchReader_1.MatchReader(csvReader);
matchReader.load();
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.default.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.default.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won ", manUnitedWins, "games");
