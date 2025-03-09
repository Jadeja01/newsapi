const express = require("express");
const router = express.Router();

// Sample News Data
const news = 
[
    {
      "id": 1,
      "title": "New Study Finds Link Between Diet and Mental Health",
      "description": "Researchers have found that a balanced diet rich in fruits and vegetables can significantly improve mental health.",
      "imageUrl": "https://example.com/healthy-diet.jpg",
      "articleUrl": "https://example.com/health-news1",
      "category": "Health"
    },
    {
      "id": 2,
      "title": "Breakthrough in Cancer Treatment Shows Promising Results",
      "description": "Scientists have developed a new therapy that has shown a 90% success rate in early trials for treating certain types of cancer.",
      "imageUrl": "https://example.com/cancer-research.jpg",
      "articleUrl": "https://example.com/health-news2",
      "category": "Health"
    },
    {
      "id": 3,
      "title": "Regular Exercise Reduces Risk of Heart Disease",
      "description": "Doctors recommend at least 30 minutes of daily exercise to lower the risk of heart-related issues.",
      "imageUrl": "https://example.com/exercise-heart.jpg",
      "articleUrl": "https://example.com/health-news3",
      "category": "Health"
    },
    {
      "id": 4,
      "title": "WHO Reports Rise in Global Immunization Rates",
      "description": "The World Health Organization reports an increase in vaccination rates worldwide, reducing the spread of preventable diseases.",
      "imageUrl": "https://example.com/vaccination.jpg",
      "articleUrl": "https://example.com/health-news4",
      "category": "Health"
    },
    {
      "id": 5,
      "title": "Sleep Deprivation Linked to Increased Stress Levels",
      "description": "A new study reveals that lack of sleep can significantly increase stress and anxiety levels.",
      "imageUrl": "https://example.com/sleep-study.jpg",
      "articleUrl": "https://example.com/health-news5",
      "category": "Health"
    }
  ]
  

// Get All News
router.get("/", (req, res) => {
    res.json(news);
});

module.exports = router;