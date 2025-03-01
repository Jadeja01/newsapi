const express = require("express");
const router = express.Router();

// Sample News Data
const news = [
    {
      "id": 1,
      "title": "Champions League Final: Exciting Match Ahead",
      "description": "Football fans are eagerly anticipating the Champions League final between two top teams this weekend.",
      "imageUrl": "https://example.com/champions-league.jpg",
      "articleUrl": "https://example.com/sports-news1",
      "category": "Sports"
    },
    {
      "id": 2,
      "title": "Tennis Star Wins Grand Slam Title",
      "description": "A thrilling final saw the rising star claim their first Grand Slam championship.",
      "imageUrl": "https://example.com/tennis-grand-slam.jpg",
      "articleUrl": "https://example.com/sports-news2",
      "category": "Sports"
    },
    {
      "id": 3,
      "title": "NBA Playoffs: Teams Battle for Finals Spot",
      "description": "The NBA playoffs heat up as top teams compete for a place in the finals.",
      "imageUrl": "https://example.com/nba-playoffs.jpg",
      "articleUrl": "https://example.com/sports-news3",
      "category": "Sports"
    },
    {
      "id": 4,
      "title": "Olympic Games 2025: Preparations Underway",
      "description": "Host city gears up for the 2025 Olympic Games with new stadiums and infrastructure.",
      "imageUrl": "https://example.com/olympics-2025.jpg",
      "articleUrl": "https://example.com/sports-news4",
      "category": "Sports"
    },
    {
      "id": 5,
      "title": "Formula 1: New Season Kicks Off",
      "description": "The F1 season begins with thrilling races and new rivalries on the track.",
      "imageUrl": "https://example.com/f1-race.jpg",
      "articleUrl": "https://example.com/sports-news5",
      "category": "Sports"
    }
  ];  

// Get All News
router.get("/", (req, res) => {
    res.json(news);
});

module.exports = router;
