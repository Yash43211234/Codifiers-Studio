// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Registration = require('../models/Registration');


// Route: POST /api/register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !slot) {
  return res.status(400).json({ error: 'All fields are required' });
}
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

router.post('/formdata', async (req, res) => {
  const { name, email, slot } = req.body;

  try {
    const registration = new Registration({ name, email, slot });
    await registration.save();
    res.status(201).json({ message: 'Slot registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Slot registration failed' });
  }
});


module.exports = router;
