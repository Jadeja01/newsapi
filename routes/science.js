const express = require("express");
const paginate = require("../middleware/pagination");
const router = express.Router();

// Sample News Data
const news = [
  { id: 1, title: "NASA Discovers New Exoplanet", description: "Scientists have found a potentially habitable exoplanet in a distant galaxy.", imageUrl: "https://example.com/exoplanet.jpg", articleUrl: "https://example.com/science-news1" },
  { id: 2, title: "Quantum Computing Achieves New Milestone", description: "A new breakthrough in quantum computing brings us closer to practical applications.", imageUrl: "https://example.com/quantum.jpg", articleUrl: "https://example.com/science-news2" },
  { id: 3, title: "AI Breakthrough Helps Diagnose Diseases", description: "New AI technology can detect diseases earlier and with higher accuracy.", imageUrl: "https://example.com/ai-health.jpg", articleUrl: "https://example.com/science-news3" },
  { id: 4, title: "Mars Rover Sends Back Stunning Images", description: "NASA’s rover continues to capture breathtaking images of the Martian surface.", imageUrl: "https://example.com/mars.jpg", articleUrl: "https://example.com/science-news4" },
  { id: 5, title: "Scientists Develop Self-Healing Materials", description: "A major breakthrough in materials science could revolutionize construction and electronics.", imageUrl: "https://example.com/self-healing.jpg", articleUrl: "https://example.com/science-news5" },
  { id: 6, title: "Antibiotic Resistance Crisis Escalates", description: "Experts warn that antibiotic resistance is becoming a serious global health threat.", imageUrl: "https://example.com/antibiotic.jpg", articleUrl: "https://example.com/science-news6" },
  { id: 7, title: "New Battery Technology Extends EV Range", description: "Scientists have developed batteries that last longer and charge faster.", imageUrl: "https://example.com/battery.jpg", articleUrl: "https://example.com/science-news7" },
  { id: 8, title: "Hubble Telescope Spots Distant Galaxy", description: "A newly discovered galaxy offers insights into the early universe.", imageUrl: "https://example.com/galaxy.jpg", articleUrl: "https://example.com/science-news8" },
  { id: 9, title: "Fusion Energy: The Future of Power?", description: "Scientists take a major step towards clean and limitless fusion energy.", imageUrl: "https://example.com/fusion.jpg", articleUrl: "https://example.com/science-news9" },
  { id: 10, title: "Climate Change Effects More Severe Than Predicted", description: "New research suggests climate change is accelerating faster than expected.", imageUrl: "https://example.com/climate.jpg", articleUrl: "https://example.com/science-news10" },
  { id: 11, title: "Deep Ocean Exploration Uncovers New Species", description: "Scientists discover never-before-seen marine life in deep-sea trenches.", imageUrl: "https://example.com/ocean.jpg", articleUrl: "https://example.com/science-news11" },
  { id: 12, title: "Brain Implant Restores Movement in Paralyzed Patients", description: "Groundbreaking research helps paralyzed individuals regain mobility.", imageUrl: "https://example.com/brain-implant.jpg", articleUrl: "https://example.com/science-news12" },
  { id: 13, title: "Scientists Create Artificial Photosynthesis", description: "A breakthrough in artificial photosynthesis could lead to new energy sources.", imageUrl: "https://example.com/photosynthesis.jpg", articleUrl: "https://example.com/science-news13" },
  { id: 14, title: "Researchers Develop Bioengineered Organs", description: "Bioengineered organs could eliminate the need for transplants.", imageUrl: "https://example.com/organs.jpg", articleUrl: "https://example.com/science-news14" },
  { id: 15, title: "SpaceX Prepares for First Civilian Moon Mission", description: "A historic private spaceflight to the Moon is in the final stages of preparation.", imageUrl: "https://example.com/spacex.jpg", articleUrl: "https://example.com/science-news15" },
  { id: 16, title: "AI-Powered Robots Assist in Surgery", description: "Surgical procedures are becoming more precise with AI-assisted robotics.", imageUrl: "https://example.com/robot-surgery.jpg", articleUrl: "https://example.com/science-news16" },
  { id: 17, title: "New Genetic Discovery Could Extend Lifespan", description: "Scientists uncover a gene linked to longevity and disease resistance.", imageUrl: "https://example.com/genetics.jpg", articleUrl: "https://example.com/science-news17" },
  { id: 18, title: "Microplastic Pollution Found in Human Blood", description: "New research reveals the widespread presence of microplastics in human bodies.", imageUrl: "https://example.com/microplastic.jpg", articleUrl: "https://example.com/science-news18" },
  { id: 19, title: "Breakthrough in Renewable Energy Storage", description: "A new energy storage method could make renewables more viable.", imageUrl: "https://example.com/renewable.jpg", articleUrl: "https://example.com/science-news19" },
  { id: 20, title: "Lunar Ice Could Support Future Moon Missions", description: "Scientists confirm the presence of ice on the Moon, crucial for future exploration.", imageUrl: "https://example.com/lunar-ice.jpg", articleUrl: "https://example.com/science-news20" }
];

router.use((req,res,next)=>{
    res.locals.news = news;
    next();
})

// Get All News
router.get("/",paginate, (req, res) => {
    res.json(res.locals.paginatedNews);
});

module.exports = router;
