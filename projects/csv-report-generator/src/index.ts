import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReporter";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);

// change the report
summary.outputTarget = new ConsoleReport();
summary.buildAndPrintReport(matchReader.matches);
