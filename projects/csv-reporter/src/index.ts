import { readCSV } from "./helpers/main";

const results = readCSV("football.csv");

async function numberOfTimesTeamWinGame(team: string) {
  const data = await results;
  let wins = data.filter(game => {
    if (game.home_team === team) {
      if (game.home_team_score > game.away_team_score) {
        return true;
      }
      return false;
    }
    if (game.away_team === team) {
      if (game.away_team_score > game.home_team_score) {
        return true;
      }
      return false;
    }
    return false;
  });
  return wins.length;
}

numberOfTimesTeamWinGame("West Ham").then(data => console.log(data));
