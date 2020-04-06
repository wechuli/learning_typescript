"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const ConsoleReporter_1 = require("./reportTargets/ConsoleReporter");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
// change the report
summary.outputTarget = new ConsoleReporter_1.ConsoleReport();
summary.buildAndPrintReport(matchReader.matches);
