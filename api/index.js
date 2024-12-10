const express = require('express');
const hirunews = require('hirunews-scraper');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Hiru News API powered by hirunews-scraper!');
});

// News Route
app.get('/news', async (req, res) => {
  try {
    const news = await hirunews.getLatestNews(); // Assuming this is a method in the package
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching news' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
