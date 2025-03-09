const express = require("express");
const router = express.Router();

// Sample News Data
const news = [
  { id: 1, title: "World Leaders Gather for Climate Summit", description: "Global leaders meet to discuss urgent environmental policies.", imageUrl: "https://example.com/climate-summit.jpg", articleUrl: "https://example.com/general-news1" },
  { id: 2, title: "Global Inflation Rates Reach Record Highs", description: "Rising inflation affects economies worldwide, impacting daily expenses.", imageUrl: "https://example.com/inflation.jpg", articleUrl: "https://example.com/general-news2" },
  { id: 3, title: "New Laws Aim to Regulate Social Media", description: "Governments implement strict regulations on social media platforms.", imageUrl: "https://example.com/social-media-law.jpg", articleUrl: "https://example.com/general-news3" },
  { id: 4, title: "Wildfires Continue to Devastate Forests", description: "Massive wildfires destroy thousands of acres of land globally.", imageUrl: "https://example.com/wildfire.jpg", articleUrl: "https://example.com/general-news4" },
  { id: 5, title: "World’s Largest Tech Expo Begins", description: "Tech enthusiasts gather to witness the latest advancements.", imageUrl: "https://example.com/tech-expo.jpg", articleUrl: "https://example.com/general-news5" },
  { id: 6, title: "Breakthrough in Water Purification Technology", description: "New technology aims to provide clean water to developing regions.", imageUrl: "https://example.com/water.jpg", articleUrl: "https://example.com/general-news6" },
  { id: 7, title: "Unemployment Rates Show Signs of Recovery", description: "More people return to work as economies stabilize.", imageUrl: "https://example.com/jobs.jpg", articleUrl: "https://example.com/general-news7" },
  { id: 8, title: "Major Cyberattack Disrupts Global Networks", description: "A large-scale cyberattack affects businesses and governments worldwide.", imageUrl: "https://example.com/cyberattack.jpg", articleUrl: "https://example.com/general-news8" },
  { id: 9, title: "Countries Agree on New Space Treaty", description: "Nations come together to regulate space exploration and resource use.", imageUrl: "https://example.com/space-treaty.jpg", articleUrl: "https://example.com/general-news9" },
  { id: 10, title: "Air Travel Demand Surges Post-Pandemic", description: "The aviation industry sees a rapid increase in travelers.", imageUrl: "https://example.com/air-travel.jpg", articleUrl: "https://example.com/general-news10" },
  { id: 11, title: "Advancements in 5G Technology Roll Out Worldwide", description: "Faster internet speeds become available in more regions.", imageUrl: "https://example.com/5g.jpg", articleUrl: "https://example.com/general-news11" },
  { id: 12, title: "Global Hunger Crisis Worsens", description: "Food shortages increase due to climate change and conflicts.", imageUrl: "https://example.com/hunger.jpg", articleUrl: "https://example.com/general-news12" },
  { id: 13, title: "Automated Vehicles Begin Public Trials", description: "Self-driving cars enter their final testing phase before mass adoption.", imageUrl: "https://example.com/self-driving.jpg", articleUrl: "https://example.com/general-news13" },
  { id: 14, title: "Renewable Energy Use Surpasses Fossil Fuels", description: "For the first time, renewable energy production exceeds fossil fuels.", imageUrl: "https://example.com/renewable-energy.jpg", articleUrl: "https://example.com/general-news14" },
  { id: 15, title: "Education Reform: New Policies Introduced", description: "Governments introduce reforms to improve education standards.", imageUrl: "https://example.com/education.jpg", articleUrl: "https://example.com/general-news15" },
  { id: 16, title: "Global Protests Demand Action on Human Rights", description: "Millions take to the streets advocating for human rights.", imageUrl: "https://example.com/protests.jpg", articleUrl: "https://example.com/general-news16" },
  { id: 17, title: "NASA Announces First Manned Mission to Mars", description: "Astronauts will soon set foot on the Red Planet.", imageUrl: "https://example.com/mars-mission.jpg", articleUrl: "https://example.com/general-news17" },
  { id: 18, title: "AI Integration in Daily Life Expands Rapidly", description: "Artificial intelligence is now more present in daily activities than ever.", imageUrl: "https://example.com/ai-integration.jpg", articleUrl: "https://example.com/general-news18" },
  { id: 19, title: "Rising Housing Costs Impact Urban Populations", description: "The cost of living continues to increase in major cities.", imageUrl: "https://example.com/housing.jpg", articleUrl: "https://example.com/general-news19" },
  { id: 20, title: "Wildlife Conservation Efforts See Success", description: "Some endangered species are making a comeback.", imageUrl: "https://example.com/conservation.jpg", articleUrl: "https://example.com/general-news20" }
],


// Get All News
router.get("/", (req, res) => {
    res.json(news);
});

module.exports = router;
