"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./helpers/main");
var results = main_1.readCSV("football.csv");
results.then(function (data) { return console.log(data[0]); });
