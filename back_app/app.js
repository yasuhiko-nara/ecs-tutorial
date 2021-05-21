const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello from BACKEND-server!');
});

app.listen(port, () => {
  console.log(`Example app listening at port:${port}`);
});
