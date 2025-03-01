const express = require("express");
const router = express.Router();

// Sample News Data
const news = [
    {
      "id": 1,
      "title": "Government Announces New Policies for Citizens",
      "description": "The government has introduced a set of new policies aimed at improving public services and infrastructure.",
      "imageUrl": "https://example.com/government-policies.jpg",
      "articleUrl": "https://example.com/general-news1",
      "category": "General"
    },
    {
      "id": 2,
      "title": "Global Protests Over Climate Change",
      "description": "Citizens around the world are protesting for stronger climate action.",
      "imageUrl": "https://example.com/climate-protests.jpg",
      "articleUrl": "https://example.com/general-news2",
      "category": "General"
    }
  ]
  ;

// Get All News
router.get("/", (req, res) => {
    res.json(news);
});

module.exports = router;
