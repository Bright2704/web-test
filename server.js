// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8000; // Use the PORT environment variable if it's available

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

export default app; // Export the app
