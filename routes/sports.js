const express = require("express");
const router = express.Router();

// Sample News Data
const news = [
  { id: 1, title: "Champions League Final Set for Showdown", description: "The two top teams face off in the final match of the Champions League.", imageUrl: "https://example.com/champions-league.jpg", articleUrl: "https://example.com/sports-news1" },
  { id: 2, title: "Olympics 2025: What to Expect", description: "The upcoming Olympics are set to showcase the world's best athletes.", imageUrl: "https://example.com/olympics.jpg", articleUrl: "https://example.com/sports-news2" },
  { id: 3, title: "Tennis Star Wins Grand Slam Title", description: "A rising tennis star claims victory in a stunning final match.", imageUrl: "https://example.com/tennis.jpg", articleUrl: "https://example.com/sports-news3" },
  { id: 4, title: "Football Transfer Market Heats Up", description: "Top clubs are making moves to sign the best players.", imageUrl: "https://example.com/football-transfer.jpg", articleUrl: "https://example.com/sports-news4" },
  { id: 5, title: "NBA Playoffs: Who Will Take the Crown?", description: "The NBA playoffs are underway with intense matchups.", imageUrl: "https://example.com/nba-playoffs.jpg", articleUrl: "https://example.com/sports-news5" },
  { id: 6, title: "Formula 1: New Regulations Impact Racing", description: "New F1 rules are changing the way teams approach races.", imageUrl: "https://example.com/f1-rules.jpg", articleUrl: "https://example.com/sports-news6" },
  { id: 7, title: "Cricket World Cup: Latest Updates", description: "The Cricket World Cup is delivering exciting matches.", imageUrl: "https://example.com/cricket-worldcup.jpg", articleUrl: "https://example.com/sports-news7" },
  { id: 8, title: "Golf Championship Sees Record Attendance", description: "Fans flock to see their favorite golfers in action.", imageUrl: "https://example.com/golf.jpg", articleUrl: "https://example.com/sports-news8" },
  { id: 9, title: "UFC Fight Night: Biggest Knockouts", description: "UFC fighters put on a show with incredible knockouts.", imageUrl: "https://example.com/ufc.jpg", articleUrl: "https://example.com/sports-news9" },
  { id: 10, title: "Athletics Championship: Who Won Gold?", description: "Top sprinters and long-distance runners compete for gold.", imageUrl: "https://example.com/athletics.jpg", articleUrl: "https://example.com/sports-news10" },
  { id: 11, title: "Women's Football Gaining Popularity", description: "Women's football leagues are growing worldwide.", imageUrl: "https://example.com/womens-football.jpg", articleUrl: "https://example.com/sports-news11" },
  { id: 12, title: "E-Sports: The Future of Competitive Gaming", description: "E-Sports tournaments are drawing millions of viewers.", imageUrl: "https://example.com/esports.jpg", articleUrl: "https://example.com/sports-news12" },
  { id: 13, title: "NFL Draft: Top Picks This Year", description: "The latest NFL draft has brought surprises and great talent.", imageUrl: "https://example.com/nfl-draft.jpg", articleUrl: "https://example.com/sports-news13" },
  { id: 14, title: "Marathon Records Broken in New York", description: "Runners set new records in this year's NYC marathon.", imageUrl: "https://example.com/marathon.jpg", articleUrl: "https://example.com/sports-news14" },
  { id: 15, title: "Boxing Title Fight Ends in Knockout", description: "A stunning knockout seals the championship match.", imageUrl: "https://example.com/boxing.jpg", articleUrl: "https://example.com/sports-news15" },
  { id: 16, title: "Cycling Tour: Who is Leading?", description: "The Tour de France sees an unexpected leader emerge.", imageUrl: "https://example.com/cycling.jpg", articleUrl: "https://example.com/sports-news16" },
  { id: 17, title: "Baseball World Series: Epic Comeback", description: "One team fights back from the brink of elimination.", imageUrl: "https://example.com/baseball.jpg", articleUrl: "https://example.com/sports-news17" },
  { id: 18, title: "Ice Hockey Championship Heats Up", description: "The best teams battle for hockey's biggest prize.", imageUrl: "https://example.com/ice-hockey.jpg", articleUrl: "https://example.com/sports-news18" },
  { id: 19, title: "Wrestling Event Breaks Records", description: "A major wrestling event attracts record-breaking attendance.", imageUrl: "https://example.com/wrestling.jpg", articleUrl: "https://example.com/sports-news19" },
  { id: 20, title: "Rowing Championships: Toughest Competition Yet", description: "Rowers face extreme conditions in a difficult race.", imageUrl: "https://example.com/rowing.jpg", articleUrl: "https://example.com/sports-news20" }
];  

// Get All News
router.get("/", (req, res) => {
    res.json(news);
});

module.exports = router;
