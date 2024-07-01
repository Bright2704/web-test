const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Use the PORT environment variable if it's available
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
