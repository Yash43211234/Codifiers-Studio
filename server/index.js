const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(express.json());
app.use(cors());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'sql213.infinityfree.com',
  user: 'if0_38961537',
  password: 'YOUR_VPANEL_PASSWORD', // Replace with your actual vPanel password
  database: 'if0_38961537_Registration'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err);
    return;
  }
  console.log('Connected to InfinityFree MySQL database.');
});

// Route: POST /api/register
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err, results) => {
    if (err) {
      console.error('Registration failed:', err);
      return res.status(500).json({ error: 'Registration failed' });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
});

// Route: POST /api/formdata
app.post('/api/formdata', (req, res) => {
  const { name, email, slot } = req.body;

  if (!name || !email || !slot) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO registrations (name, email, slot) VALUES (?, ?, ?)';
  db.query(query, [name, email, slot], (err, results) => {
    if (err) {
      console.error('Slot registration failed:', err);
      return res.status(500).json({ error: 'Slot registration failed' });
    }
    res.status(201).json({ message: 'Slot registered successfully' });
  });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
