const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = 5000;

app.get("/news", async (req, res) => {
  const { query } = req.query;
  const API_KEY = process.env.REACT_APP_API_KEY;

  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Unable to fetch news" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
