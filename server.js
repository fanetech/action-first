const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
app.get('/api', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});