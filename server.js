const express = require('express');
const app = express();
const PORT = 3000;
const API_KEY = process.env.X_API_KEY || 'default-api-key';

app.get('/endpoint', (req, res) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey === API_KEY) {
    console.log('Request received with valid API key');
    res.send('Hello from backend service!');
  } else {
    console.log('Request received with invalid API key');
    res.status(401).send('Unauthorized');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
