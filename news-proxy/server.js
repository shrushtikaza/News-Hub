const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;
const allowedOrigins = ['http://localhost:3000', 'https://news-hub-dy3t.onrender.com'];

app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true); 
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

app.get("/news", async (req, res) => {
  const { query } = req.query;
  const API_KEY = process.env.REACT_APP_API_KEY;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is missing" });
  }

  console.log("Received query:", query);

  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    console.log("News response:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ error: "Unable to fetch news" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
