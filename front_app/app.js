const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const url = 'http://localhost:8000';

app.get('/', (req, res) => {
  res.send('Hello from FRONTEND-server!');
});

app.get('/backend', async (req, res) => {
  const axios_res = await axios.get(url);
  res.send(axios_res.data);
});

app.listen(port, () => {
  console.log(`Example app listening at port:${port}`);
});
