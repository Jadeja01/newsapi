const express = require("express");
const router = express.Router();

// Sample News Data
const news = [
    { id: 1, title: "Breaking News: Express is Awesome!", content: "Express.js makes backend development easy!" },
    { id: 2, title: "Tech Trends 2025", content: "AI and Blockchain are the future!" }
];

// Get All News
router.get("/", (req, res) => {
    res.json(news);
});

module.exports = router;
