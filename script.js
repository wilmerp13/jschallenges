

const team1 = "Dolphins";
const team2 = "Koalas";

const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;

const team1Avg = calcAverage(44,23,71);
const team2Avg = calcAverage(65,54,49);
console.log(team1Avg, team2Avg);

 function checkwinner(team1Avg,team2Avg) {
   if (team1Avg > 2*team2Avg) {
     console.log(`${team1} is the winner! 😊`); 
}
  else if (team2Avg > 2*team1Avg) {
    console.log(`${team2} is the winner! 😉`);
}
 
else {console.log("no team wins");
}
 }
     
checkwinner();