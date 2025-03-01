const express = require("express");
const router = express.Router();

// Sample News Data
const news = [
    {
      "id": 1,
      "title": "NASA Discovers New Exoplanet",
      "description": "NASA scientists have discovered a new Earth-like exoplanet in the habitable zone of a distant star.",
      "imageUrl": "https://example.com/nasa-exoplanet.jpg",
      "articleUrl": "https://example.com/science-news1",
      "category": "Science"
    },
    {
      "id": 2,
      "title": "AI Breakthrough: Scientists Create Human-Like Robots",
      "description": "New AI-powered robots can mimic human emotions and interactions more accurately than ever.",
      "imageUrl": "https://example.com/ai-robot.jpg",
      "articleUrl": "https://example.com/science-news2",
      "category": "Science"
    },
    {
      "id": 3,
      "title": "SpaceX Prepares for Mars Mission",
      "description": "SpaceX is gearing up for its first manned mission to Mars, scheduled for 2027.",
      "imageUrl": "https://example.com/spacex-mars.jpg",
      "articleUrl": "https://example.com/science-news3",
      "category": "Science"
    },
    {
      "id": 4,
      "title": "Medical Scientists Develop Cancer Treatment",
      "description": "A revolutionary new treatment has shown promising results in curing certain types of cancer.",
      "imageUrl": "https://example.com/cancer-treatment.jpg",
      "articleUrl": "https://example.com/science-news4",
      "category": "Science"
    },
    {
      "id": 5,
      "title": "Climate Change: New Study Shows Rising Global Temperatures",
      "description": "A new study warns about the increasing global temperatures and its impact on the planet.",
      "imageUrl": "https://example.com/climate-change.jpg",
      "articleUrl": "https://example.com/science-news5",
      "category": "Science"
    }
  ]
  ;

// Get All News
router.get("/", (req, res) => {
    res.json(news);
});

module.exports = router;
