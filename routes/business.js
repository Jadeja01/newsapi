const express = require("express");
const router = express.Router();
const paginate = require("../middleware/pagination.js");

// Sample News Data
const news = [
  { id: 1, title: "Stock Market Hits Record Highs", description: "The stock market surged today, reaching all-time highs.", imageUrl: "https://example.com/stock-market.jpg", articleUrl: "https://example.com/business-news1" },
  { id: 2, title: "Tech Giants Announce New AI Investments", description: "Major tech companies are investing billions in AI.", imageUrl: "https://example.com/ai-investments.jpg", articleUrl: "https://example.com/business-news2" },
  { id: 3, title: "Cryptocurrency Market Sees Major Gains", description: "Bitcoin and Ethereum prices surge.", imageUrl: "https://example.com/crypto-market.jpg", articleUrl: "https://example.com/business-news3" },
  { id: 4, title: "E-commerce Boom Continues Post-Pandemic", description: "Online retail sales continue to rise.", imageUrl: "https://example.com/ecommerce-boom.jpg", articleUrl: "https://example.com/business-news4" },
  { id: 5, title: "Oil Prices Surge Amid Supply Concerns", description: "Global oil prices rise as supply concerns grow.", imageUrl: "https://example.com/oil-prices.jpg", articleUrl: "https://example.com/business-news5" },
  { id: 6, title: "Small Businesses Face Economic Challenges", description: "Rising costs are making it harder for small businesses to thrive.", imageUrl: "https://example.com/small-business.jpg", articleUrl: "https://example.com/business-news6" },
  { id: 7, title: "Tech Startups Secure Record Investments", description: "Venture capital firms pour millions into innovative startups.", imageUrl: "https://example.com/startup-investments.jpg", articleUrl: "https://example.com/business-news7" },
  { id: 8, title: "Electric Cars Market Growth Accelerates", description: "EV sales hit record highs amid rising environmental concerns.", imageUrl: "https://example.com/ev-growth.jpg", articleUrl: "https://example.com/business-news8" },
  { id: 9, title: "Real Estate Market Booming Despite Interest Rates", description: "Housing prices continue to climb in major cities.", imageUrl: "https://example.com/real-estate.jpg", articleUrl: "https://example.com/business-news9" },
  { id: 10, title: "Global Trade Faces Disruptions", description: "Supply chain challenges continue to impact global commerce.", imageUrl: "https://example.com/global-trade.jpg", articleUrl: "https://example.com/business-news10" },
  { id: 11, title: "New Banking Regulations Introduced", description: "Financial authorities implement new policies to stabilize markets.", imageUrl: "https://example.com/banking-regulations.jpg", articleUrl: "https://example.com/business-news11" },
  { id: 12, title: "Tech Industry Sees Wave of Layoffs", description: "Many major tech companies announce job cuts.", imageUrl: "https://example.com/tech-layoffs.jpg", articleUrl: "https://example.com/business-news12" },
  { id: 13, title: "Food Industry Faces Supply Chain Challenges", description: "Grocery stores struggle to keep shelves stocked.", imageUrl: "https://example.com/food-supply.jpg", articleUrl: "https://example.com/business-news13" },
  { id: 14, title: "Luxury Market Sees Rise in Demand", description: "High-end brands report record-breaking sales.", imageUrl: "https://example.com/luxury-market.jpg", articleUrl: "https://example.com/business-news14" },
  { id: 15, title: "Retail Stores Adapt to E-commerce Boom", description: "More businesses shift to online sales to meet demand.", imageUrl: "https://example.com/retail-ecommerce.jpg", articleUrl: "https://example.com/business-news15" },
  { id: 16, title: "Big Tech Faces Antitrust Investigations", description: "Governments are cracking down on monopolistic practices.", imageUrl: "https://example.com/antitrust.jpg", articleUrl: "https://example.com/business-news16" },
  { id: 17, title: "Renewable Energy Investments Soar", description: "More companies invest in green energy solutions.", imageUrl: "https://example.com/renewable-energy.jpg", articleUrl: "https://example.com/business-news17" },
  { id: 18, title: "Cryptocurrency Regulations Tighten", description: "New laws aim to curb illegal crypto transactions.", imageUrl: "https://example.com/crypto-regulations.jpg", articleUrl: "https://example.com/business-news18" },
  { id: 19, title: "Remote Work Becoming the New Norm", description: "More companies shift to permanent remote work policies.", imageUrl: "https://example.com/remote-work.jpg", articleUrl: "https://example.com/business-news19" },
  { id: 20, title: "Investment Strategies for 2025", description: "Experts share their top investment tips for the coming year.", imageUrl: "https://example.com/investment-strategies.jpg", articleUrl: "https://example.com/business-news20" }
];

router.use((req, res, next) => {
  res.locals.news = news;
  next();
});

// Get All News
router.get("/",paginate, (req, res) => {
    res.json(res.locals.paginatedNews);
});

module.exports = router;
