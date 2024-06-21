require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 8080;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

// Test PostgreSQL connection
pool.query('SELECT NOW()', (err, result) => {
    if (err) {
        console.error('Error connecting to PostgreSQL:', err);
    } else {
        console.log('Connected to PostgreSQL at:', result.rows[0].now);
    }
});

// Express route example
app.get('/', (req, res) => {
    // Send both messages after ensuring the PostgreSQL connection check completes
    pool.query('SELECT NOW()', (err, result) => {
        if (err) {
            res.send('Error connecting to PostgreSQL');
        } else {
            res.send('Welcome to my app service<br>Connection to PostgreSQL successful');
        }
    });
});

// Start Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
