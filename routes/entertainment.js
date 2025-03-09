const express = require("express");
const router = express.Router();

// Sample News Data
const news = [
  { id: 1, title: "Blockbuster Movie Breaks Box Office Records", description: "A new blockbuster movie has set records at the box office.", imageUrl: "https://example.com/movie.jpg", articleUrl: "https://example.com/entertainment-news1" },
  { id: 2, title: "Famous Singer Announces World Tour", description: "A top artist is set to embark on a global music tour.", imageUrl: "https://example.com/singer.jpg", articleUrl: "https://example.com/entertainment-news2" },
  { id: 3, title: "Award Show Highlights Best Films of the Year", description: "The annual award show celebrated the best in cinema.", imageUrl: "https://example.com/award-show.jpg", articleUrl: "https://example.com/entertainment-news3" },
  { id: 4, title: "Popular TV Series Renewed for Another Season", description: "Fans rejoice as their favorite series gets another season.", imageUrl: "https://example.com/tv-series.jpg", articleUrl: "https://example.com/entertainment-news4" },
  { id: 5, title: "Bollywood Star Signs Major Film Deal", description: "A leading Bollywood actor has signed a multi-movie contract.", imageUrl: "https://example.com/bollywood.jpg", articleUrl: "https://example.com/entertainment-news5" },
  { id: 6, title: "Streaming Platform Releases New Hit Series", description: "A new series is trending worldwide on major streaming platforms.", imageUrl: "https://example.com/streaming.jpg", articleUrl: "https://example.com/entertainment-news6" },
  { id: 7, title: "Documentary Sheds Light on Music Industry", description: "A new documentary exposes the realities of the music business.", imageUrl: "https://example.com/documentary.jpg", articleUrl: "https://example.com/entertainment-news7" },
  { id: 8, title: "Hollywood Legend Receives Lifetime Achievement Award", description: "A celebrated actor has been honored for their career contributions.", imageUrl: "https://example.com/lifetime-award.jpg", articleUrl: "https://example.com/entertainment-news8" },
  { id: 9, title: "Upcoming Movie Trailer Goes Viral", description: "A highly anticipated movie trailer is taking social media by storm.", imageUrl: "https://example.com/movie-trailer.jpg", articleUrl: "https://example.com/entertainment-news9" },
  { id: 10, title: "Music Festival Draws Record Crowds", description: "A major music festival saw its biggest audience yet.", imageUrl: "https://example.com/music-festival.jpg", articleUrl: "https://example.com/entertainment-news10" },
  { id: 11, title: "Comedy Special Hits Top Streaming Charts", description: "A stand-up comedy special is trending globally.", imageUrl: "https://example.com/comedy.jpg", articleUrl: "https://example.com/entertainment-news11" },
  { id: 12, title: "Classic Movie Gets Modern Reboot", description: "A popular classic is being remade with a modern twist.", imageUrl: "https://example.com/movie-reboot.jpg", articleUrl: "https://example.com/entertainment-news12" },
  { id: 13, title: "TV Actor Cast in Major Superhero Role", description: "A well-known TV actor is joining the superhero universe.", imageUrl: "https://example.com/superhero.jpg", articleUrl: "https://example.com/entertainment-news13" },
  { id: 14, title: "Animated Film Wins Prestigious Award", description: "An animated feature has taken home a top prize.", imageUrl: "https://example.com/animation.jpg", articleUrl: "https://example.com/entertainment-news14" },
  { id: 15, title: "Upcoming Biopic Sparks Controversy", description: "A new biopic is causing debate among audiences.", imageUrl: "https://example.com/biopic.jpg", articleUrl: "https://example.com/entertainment-news15" },
  { id: 16, title: "Rising Star Lands Lead Role in Sci-Fi Epic", description: "A newcomer has secured a major role in a big-budget sci-fi movie.", imageUrl: "https://example.com/sci-fi.jpg", articleUrl: "https://example.com/entertainment-news16" },
  { id: 17, title: "New Broadway Show Receives Rave Reviews", description: "A new theater production is a hit among critics and audiences.", imageUrl: "https://example.com/broadway.jpg", articleUrl: "https://example.com/entertainment-news17" },
  { id: 18, title: "Music Industry Sees Rise in Vinyl Sales", description: "Vinyl records are making a huge comeback.", imageUrl: "https://example.com/vinyl.jpg", articleUrl: "https://example.com/entertainment-news18" },
  { id: 19, title: "Upcoming Concert Tickets Sell Out in Minutes", description: "Fans scramble to secure tickets for a major artist's tour.", imageUrl: "https://example.com/concert.jpg", articleUrl: "https://example.com/entertainment-news19" },
  { id: 20, title: "Celebrity Chef Launches New Cooking Show", description: "A famous chef is bringing their expertise to a new TV series.", imageUrl: "https://example.com/cooking-show.jpg", articleUrl: "https://example.com/entertainment-news20" }
];

// Get All News
router.get("/", (req, res) => {
    res.json(news);
});

module.exports = router;
