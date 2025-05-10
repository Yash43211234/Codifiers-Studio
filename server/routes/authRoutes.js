// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route: POST /api/register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

module.exports = router;
