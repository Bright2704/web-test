// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');
// const app = express();
// const port = 8080;

// app.use(bodyParser.urlencoded({ extended: false }));
// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL
// });

// // Serve HTML form at the root and list the users
// app.get('/', (req, res) => {
//     const message = req.query.success ? '<p style="color:green;">Success</p>' : '';
//     pool.query('SELECT * FROM users', (err, result) => {
//         if (err) {
//             console.error('Error fetching data from PostgreSQL:', err);
//             return res.send('Error fetching data');
//         }
//         const users = result.rows;
//         const userTable = users.map(user => `<tr><td>${user.name}</td><td>${user.country}</td><td><button onclick="deleteUser(${user.id})">Delete</button></td></tr>`).join('');
//         res.send(`
//             <html>
//             <head>
//                 <style>
//                     body, html {
//                         height: 100%;
//                         margin: 0;
//                         font-family: Arial, sans-serif;
//                         display: flex;
//                         align-items: center;
//                         justify-content: center;
//                     }
//                     .centered-content {
//                         text-align: center;
//                         border: 1px solid #ddd;
//                         padding: 20px;
//                         box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
//                     }
//                     table {
//                         width: 100%;
//                         border-collapse: collapse;
//                     }
//                     th, td {
//                         border: 1px solid black;
//                         padding: 8px;
//                         text-align: left;
//                     }
//                     input[type="text"], input[type="submit"] {
//                         margin: 10px 0;
//                     }
//                 </style>
//                 <script>
//                     function deleteUser(id) {
//                         fetch('/delete/' + id, { method: 'POST' })
//                         .then(response => response.json())
//                         .then(data => {
//                             if(data.success) {
//                                 window.location.href = '/?success=true';
//                             }
//                         })
//                         .catch(error => console.error('Error:', error));
//                     }
//                 </script>
//             </head>
//             <body>
//                 <div class="centered-content">
//                     ${message}
//                     <form action="/submit" method="post">
//                         <label for="name">Name:</label><br>
//                         <input type="text" id="name" name="name"><br>
//                         <label for="country">Country:</label><br>
//                         <input type="text" id="country" name="country"><br>
//                         <input type="submit" value="Submit">
//                     </form>
//                     <h3>Existing Users:</h3>
//                     <table>
//                         <tr>
//                             <th>Name</th>
//                             <th>Country</th>
//                             <th>Action</th>
//                         </tr>
//                         ${userTable}
//                     </table>
//                 </div>
//             </body>
//             </html>
//         `);
//     });
// });

// // POST route to handle form submission
// app.post('/submit', (req, res) => {
//     const { name, country } = req.body;
//     pool.query('INSERT INTO users (name, country) VALUES ($1, $2)', [name, country], (err) => {
//         if (err) {
//             console.error('Error saving data to PostgreSQL:', err);
//             res.redirect('/?success=false');
//         } else {
//             res.redirect('/?success=true');
//         }
//     });
// });

// // Route to handle user deletion
// app.post('/delete/:id', (req, res) => {
//     const { id } = req.params;
//     pool.query('DELETE FROM users WHERE id = $1', [id], (err) => {
//         if (err) {
//             console.error('Error deleting user:', err);
//             res.json({ success: false });
//         } else {
//             res.json({ success: true });
//         }
//     });
// });

// // Start Express server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
