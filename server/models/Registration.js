// backend/models/Registration.js
const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  slot: {
    type: String,
    required: true,
    trim: true,
  }
}, {
  timestamps: true
});

const Registration = mongoose.model('Registration', registrationSchema);
module.exports = Registration;
