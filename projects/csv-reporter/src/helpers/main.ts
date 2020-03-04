import fs from "fs";
import csv from "csv-parser";

interface Iresults {
  date: Date;
  home_team: string;
  away_team: string;
  home_team_score: number;
  away_team_score: number;
  result: string;
  referee: string;
}

export function readCSV(filePath: string): Promise<Iresults[]> {
  return new Promise((resolve, reject) => {
    const results: Iresults[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", data => {
        results.push(dataFormater(data));
      })
      .on("error", err => reject(err))
      .on("end", () => resolve(results));
  });
}

function dataFormater(data: any): Iresults {
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
