require("dotenv").config();
const express = require("express");
const cors = require("cors");
const general = require("./routes/general.js");
const business = require("./routes/business.js");
const sports = require("./routes/sports.js");
const science = require("./routes/science.js");
const entertainment = require("./routes/entertainment.js");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/general", general);
app.use("/api/sports", sports);
app.use("/api/entertainment", entertainment);
app.use("/api/science", science);
app.use("/api/business", business);
app.use("/api/health", health);

// Sample Route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to My News API!</h1>");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
