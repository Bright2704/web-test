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

app.post('/submit', (req, res) => {
  const { username, password } = req.body;

  // ไม่ควรใช้ console.log ในการแสดงข้อมูลสำคัญ
  console.log(`Username: ${username}, Password: ${password}`);

  // ไม่มีการตรวจสอบความถูกต้องของข้อมูล
  if (!username || !password) {
      return res.status(400).send('Username and password are required.');
  }

  // การจัดการข้อมูลอย่างไม่ปลอดภัย
  // สามารถทำให้เกิด SQL Injection ถ้าใช้กับฐานข้อมูล
  // ตัวอย่างการใช้ query string โดยไม่มีการทำ sanitize
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  
  // สมมติว่าเรียกใช้ฟังก์ชันที่ส่ง query นี้ไปยังฐานข้อมูล
  // db.query(query, (err, result) => {
  //     if (err) throw err;
  //     res.send(result);
  // });

  res.send('User submitted successfully.');
});


export default app; // Export the app

//s/sfsdf
// สวัสดีครับ
// สวัสดีครับ
// สวัสดีครับ
// สวัสดีครับ

// เขียน codeรับinput  ที่สุ่มเสี่ยงทำให้ soanqube ตรวจจับ

//sfsdf