const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
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

    console.log('Raw API Response:', response.data);

    let data;

    // Check if the response contains a 'leaderboard' array
    if (Array.isArray(response.data.leaderboard)) {
      data = response.data.leaderboard;
    } else {
      throw new Error('Unexpected response format - missing leaderboard array');
    }

    // Filter out entries with specific names
    const filteredData = data.filter(entry => entry.name !== "Lzy Lad" && entry.name !== "kunal.zed" && entry.name !== "Dexterart.eth" && entry.name !== "Helllll.yeahhhh" && entry.name !== "Reet_s" && entry.name !== "creodevi.eth" && entry.name !== "ripfarhan" && entry.name !== "Wufm" && entry.name !== "Zordieee" && entry.name !== "svrnjxn" && entry.name !== "VALIPOKKANN" && entry.name !== "bhand.eth" && entry.name !== "Samuraizan" && entry.name !== "Yoddha.eth" );

    console.log('Filtered Data:', filteredData);
    res.json(filteredData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(error.response?.status || 500).json({ error: error.message || 'Internal Server Error' });
  }
});

module.exports = app;
