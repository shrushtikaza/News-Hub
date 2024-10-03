# News Hub 📰

**News Hub** is a responsive news application built using React.js that fetches and displays real-time news from the [NewsAPI](https://newsapi.org/). The app features an engaging UI with card-based layout, where each news article is presented with its headline, publication date, and a brief summary. It offers a hover effect that enlarges the card for easy reading and provides a seamless experience across all device types.

## Features

- **Real-time News Feed**: Fetches the latest articles from NewsAPI.
- **Responsive Design**: Fully adaptable to both desktop and mobile screens.
- **Interactive UI**: Enlarges news cards on hover for a better reading experience.
- **Easy to Use**: Intuitive interface with a clean and simple design.

## Demo

https://news-hub-dy3t.onrender.com

## Screenshots

<img width="677" alt="Screenshot 2024-10-03 at 23 09 14" src="https://github.com/user-attachments/assets/7ff506fb-8868-4605-b5f9-b06fc82eb0c9">
<br><br>
<img width="1385" alt="Screenshot 2024-10-03 at 23 43 17" src="https://github.com/user-attachments/assets/7ddecc66-ef65-4ec1-b665-5e6957c536ce">


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/news-hub.git
   cd news-hub
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your API key:

   ```
   REACT_APP_NEWS_API_KEY=your_newsapi_key_here
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app should now be running at `http://localhost:3000`.

## Usage

Once the app is running, it will automatically fetch and display the latest news articles. You can view the headlines, summaries, and dates of publication on each card. Hover over a card to see it enlarge for easier reading.

## Technologies Used

- **React.js**: For building the front-end components.
- **CSS**: For responsive design and card hover animations.
- **NewsAPI**: For fetching live news data.

## Project Structure

```
news-hub/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── NewsCard.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│   └── utils/
│       └── api.js
├── .env
├── .gitignore
├── package.json
└── README.md
```
