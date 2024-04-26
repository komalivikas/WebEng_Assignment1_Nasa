//proxy-server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 8080;

app.use(cors());

app.get('/nasa/apod', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key: 's1UF6V4z5URs0XGnZZaTF5q8bkZXJ6QrVvv2pwcP',
        // Include other parameters based on the NASA API documentation
      },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from NASA API' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
