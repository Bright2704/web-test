const express = require('express');
const app = express();
const port = 5001;
const cors = require('cors');

app.use(cors());

// Serve static files from 'public' directory
app.use(express.static('public'));

// Optionally add a specific route for the root
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
