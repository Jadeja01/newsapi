const express = require("express");
const router = express.Router();

// Sample News Data
const news = [
    {
      "id": 1,
      "title": "Stock Market Hits Record Highs",
      "description": "The stock market surged today, reaching all-time highs as investors responded positively to economic data.",
      "imageUrl": "https://example.com/stock-market.jpg",
      "articleUrl": "https://example.com/business-news1",
      "category": "Business"
    },
    {
      "id": 2,
      "title": "Tech Giants Announce New AI Investments",
      "description": "Major tech companies are investing billions in artificial intelligence to revolutionize industries.",
      "imageUrl": "https://example.com/ai-investments.jpg",
      "articleUrl": "https://example.com/business-news2",
      "category": "Business"
    },
    {
      "id": 3,
      "title": "Cryptocurrency Market Sees Major Gains",
      "description": "Bitcoin and Ethereum prices surge as investors regain confidence in digital assets.",
      "imageUrl": "https://example.com/crypto-market.jpg",
      "articleUrl": "https://example.com/business-news3",
      "category": "Business"
    },
    {
      "id": 4,
      "title": "E-commerce Boom Continues Post-Pandemic",
      "description": "Online retail sales continue to rise, reshaping the future of shopping worldwide.",
      "imageUrl": "https://example.com/ecommerce-boom.jpg",
      "articleUrl": "https://example.com/business-news4",
      "category": "Business"
    },
    {
      "id": 5,
      "title": "Oil Prices Surge Amid Supply Concerns",
      "description": "Global oil prices rise as concerns over supply disruptions increase.",
      "imageUrl": "https://example.com/oil-prices.jpg",
      "articleUrl": "https://example.com/business-news5",
      "category": "Business"
    }
  ]
  ;

// Get All News
router.get("/", (req, res) => {
    res.json(news);
});

module.exports = router;
