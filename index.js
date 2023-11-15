const express = require('express')
const axios = require('axios')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.zealy.io/communities/idklmao/leaderboard', {
          headers: {
            'x-api-key': '129f6dAgfoJBzk-XX1NskvpCe-H',
          },
          params: {
            page: 0,
            limit: 50,
          },
        });
        const data = response.data;
        console.log(data)
        res.json(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        res.status(error.response?.status || 500).json({ error: error.message || 'Internal Server Error' });
      }
})


module.exports = app