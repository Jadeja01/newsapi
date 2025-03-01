const express = require("express");
const router = express.Router();

// Sample News Data
const news = [
    {
      "id": 1,
      "title": "Hollywood Blockbuster Breaks Box Office Records",
      "description": "The latest Hollywood blockbuster has shattered box office records, grossing over $500 million in its first weekend.",
      "imageUrl": "https://example.com/hollywood-movie.jpg",
      "articleUrl": "https://example.com/entertainment-news1",
      "category": "Entertainment"
    },
    {
      "id": 2,
      "title": "Famous Singer Releases New Album",
      "description": "A top musician has released a highly anticipated album, already trending worldwide.",
      "imageUrl": "https://example.com/singer-album.jpg",
      "articleUrl": "https://example.com/entertainment-news2",
      "category": "Entertainment"
    },
    {
      "id": 3,
      "title": "Netflix Unveils New Original Series",
      "description": "Streaming giant Netflix has announced a brand new original series set to premiere next month.",
      "imageUrl": "https://example.com/netflix-series.jpg",
      "articleUrl": "https://example.com/entertainment-news3",
      "category": "Entertainment"
    },
    {
      "id": 4,
      "title": "Award Show Highlights Best in Film & TV",
      "description": "The annual awards ceremony honored the best performances in the film and television industry.",
      "imageUrl": "https://example.com/award-show.jpg",
      "articleUrl": "https://example.com/entertainment-news4",
      "category": "Entertainment"
    },
    {
      "id": 5,
      "title": "Broadway Shows Return After Pandemic",
      "description": "Live theatre makes a comeback as Broadway reopens with major productions.",
      "imageUrl": "https://example.com/broadway-show.jpg",
      "articleUrl": "https://example.com/entertainment-news5",
      "category": "Entertainment"
    }
  ];

// Get All News
router.get("/", (req, res) => {
    res.json(news);
});

module.exports = router;
