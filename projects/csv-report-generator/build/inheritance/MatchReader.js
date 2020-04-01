"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csvReader_1 = require("./csvReader");
const utils_1 = require("./utils");
class MatchReader extends csvReader_1.CSVReader {
    mapRow(row) {
        return [
            utils_1.dateStringTodate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    }
}
exports.default = MatchReader;
