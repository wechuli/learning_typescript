"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var csv_parser_1 = __importDefault(require("csv-parser"));
function readCSV(filePath) {
    return new Promise(function (resolve, reject) {
        var results = [];
        fs_1.default.createReadStream(filePath)
            .pipe(csv_parser_1.default())
            .on("data", function (data) {
            results.push(dataFormater(data));
        })
            .on("error", function (err) { return reject(err); })
            .on("end", function () { return resolve(results); });
    });
}
exports.readCSV = readCSV;
function dataFormater(data) {
    return {
        date: new Date(data.date),
        home_team: data.home_team,
        away_team: data.away_team,
        home_team_score: parseInt(data.home_team_score),
        away_team_score: parseInt(data.away_team_score),
        result: data.result,
        referee: data.referee
    };
}
