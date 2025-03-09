const express = require("express");
const paginate = require("../middleware/pagination");
const router = express.Router();


// Sample News Data
const news = [
    { id: 1, title: "New Breakthrough in Cancer Research", description: "Scientists have made a major breakthrough in cancer treatment.", imageUrl: "https://example.com/cancer-research.jpg", articleUrl: "https://example.com/health-news1" },
    { id: 2, title: "Global Obesity Rates Continue to Rise", description: "Experts warn about increasing obesity rates worldwide.", imageUrl: "https://example.com/obesity.jpg", articleUrl: "https://example.com/health-news2" },
    { id: 3, title: "Mental Health Awareness Gains Momentum", description: "More efforts are being made to support mental health initiatives.", imageUrl: "https://example.com/mental-health.jpg", articleUrl: "https://example.com/health-news3" },
    { id: 4, title: "New Vaccine Developed for Common Cold", description: "Scientists have created the first-ever vaccine for the common cold.", imageUrl: "https://example.com/cold-vaccine.jpg", articleUrl: "https://example.com/health-news4" },
    { id: 5, title: "Advancements in Alzheimer’s Treatment", description: "New therapies show promise in slowing down Alzheimer’s disease.", imageUrl: "https://example.com/alzheimers.jpg", articleUrl: "https://example.com/health-news5" },
    { id: 6, title: "Fitness Trends in 2025: What's Next?", description: "New workout trends are changing how people stay fit.", imageUrl: "https://example.com/fitness.jpg", articleUrl: "https://example.com/health-news6" },
    { id: 7, title: "Breakthrough in Organ Transplant Technology", description: "Scientists develop a technique to reduce organ rejection.", imageUrl: "https://example.com/organ-transplant.jpg", articleUrl: "https://example.com/health-news7" },
    { id: 8, title: "Superfoods: Fact or Hype?", description: "Nutritionists weigh in on the effectiveness of superfoods.", imageUrl: "https://example.com/superfoods.jpg", articleUrl: "https://example.com/health-news8" },
    { id: 9, title: "How Sleep Affects Your Health", description: "Experts highlight the importance of quality sleep.", imageUrl: "https://example.com/sleep.jpg", articleUrl: "https://example.com/health-news9" },
    { id: 10, title: "Medical AI Revolutionizes Healthcare", description: "AI-powered diagnostics are improving patient care.", imageUrl: "https://example.com/ai-healthcare.jpg", articleUrl: "https://example.com/health-news10" },
    { id: 11, title: "Health Benefits of Meditation", description: "Studies show that meditation improves mental and physical health.", imageUrl: "https://example.com/meditation.jpg", articleUrl: "https://example.com/health-news11" },
    { id: 12, title: "How Diet Impacts Longevity", description: "A balanced diet can significantly extend lifespan.", imageUrl: "https://example.com/diet.jpg", articleUrl: "https://example.com/health-news12" },
    { id: 13, title: "Breakthrough in Gene Therapy", description: "New gene editing techniques could eliminate genetic diseases.", imageUrl: "https://example.com/gene-therapy.jpg", articleUrl: "https://example.com/health-news13" },
    { id: 14, title: "The Role of Gut Health in Overall Wellness", description: "Gut bacteria play a crucial role in immunity and digestion.", imageUrl: "https://example.com/gut-health.jpg", articleUrl: "https://example.com/health-news14" },
    { id: 15, title: "COVID-19 Variants: What You Need to Know", description: "New variants of COVID-19 continue to emerge, impacting public health.", imageUrl: "https://example.com/covid-variants.jpg", articleUrl: "https://example.com/health-news15" },
    { id: 16, title: "The Rise of Personalized Medicine", description: "Doctors are now using genetic profiles to tailor treatments.", imageUrl: "https://example.com/personalized-medicine.jpg", articleUrl: "https://example.com/health-news16" },
    { id: 17, title: "The Impact of Air Pollution on Heart Disease", description: "Studies link air pollution to increased risks of cardiovascular disease.", imageUrl: "https://example.com/air-pollution.jpg", articleUrl: "https://example.com/health-news17" },
    { id: 18, title: "The Science Behind Longevity", description: "Researchers explore the secrets to living longer, healthier lives.", imageUrl: "https://example.com/longevity.jpg", articleUrl: "https://example.com/health-news18" },
    { id: 19, title: "How Social Connections Affect Mental Health", description: "Strong social relationships are key to mental well-being.", imageUrl: "https://example.com/social-health.jpg", articleUrl: "https://example.com/health-news19" },
    { id: 20, title: "Advancements in Diabetes Treatment", description: "New insulin therapies and technology are improving diabetes management.", imageUrl: "https://example.com/diabetes.jpg", articleUrl: "https://example.com/health-news20" }
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