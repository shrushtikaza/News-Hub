import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_KEY = process.env.REACT_APP_API_KEY; 

function App() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState(''); // Start with an empty query
  const [loading, setLoading] = useState(false);

  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001';

  useEffect(() => {
    if (query) {
      const fetchNews = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`${backendUrl}/news?query=${query}`);
          setNews(response.data.articles);
        } catch (error) {
          console.error("Error fetching news:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchNews();
    }
  }, [query]);
  

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.searchTerm.value.trim();
    if (searchTerm) {
      setQuery(searchTerm);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Latest News</h1>
        <form onSubmit={handleSearch}>
          <input type="text" name="searchTerm" placeholder="Search news..." />
          <button type="submit">Search</button>
        </form>
      </header>
      <div className="news-grid">
        {loading && <p>Loading news...</p>}
        {!loading && news.length > 0 && news.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
        {!loading && news.length === 0 && query && <p>No news found for "{query}"</p>}
      </div>
    </div>
  );
}

function NewsCard({ article }) {
  const { title, description, urlToImage, publishedAt, source, url } = article;

  return (
    <div className="news-card">
      <img src={urlToImage} alt={title} />
      <div className="news-content">
        <h2>{title}</h2>
        <p>{new Date(publishedAt).toLocaleDateString()}</p>
        <p>{source.name}</p>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
}

export default App;
