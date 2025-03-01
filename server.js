require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/newsRoutes.js");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/news", routes);

// Sample Route
app.get("/", (req, res) => {
    res.send("Welcome to My Express API!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
