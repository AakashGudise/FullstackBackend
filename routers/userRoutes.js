

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { register, login } = require('../controllers/userControllers');
const Inquiry = require('../models/enquary');



// Register & Login routes
router.post('/register', register); // pass role: 'user' or 'admin'
router.post('/login', login);

// GET /user → protected route to get user data from token
router.get('/user', (req, res) => {
  const token = req.cookies.User_Jwt;
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({
      name: decoded.firstName,
      email: decoded.email,
      role: decoded.role,
    });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

router.post('/inquiries', async (req, res) => {
  try {
    const { inquireFor, subject } = req.body;
    const newInquiry = new Inquiry({ inquireFor, subject });
    await newInquiry.save();
    res.status(201).json({ message: 'Inquiry saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to save inquiry' });
  }
});


module.exports = router;
