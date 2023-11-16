const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = 4000;

app.use(cors()); // Enable CORS for all routes

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.zealy.io/communities/manifest/leaderboard', {
      headers: {
        'x-api-key': 'f39d33XvnPWAn-NRm2ZY2vI_sXS',
      },
      params: {
        page: 0,
        limit: 50,
      },
    });
    const data = response.data;
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(error.response?.status || 500).json({ error: error.message || 'Internal Server Error' });
  }
});

module.exports = app;
