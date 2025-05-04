// // authController.js
// const jwt = require('jsonwebtoken');

// exports.getMe = (req, res) => {
//   const token = req.cookies.token;
//   if (!token) return res.status(401).json({ error: 'No token provided' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     res.json({ id: decoded.id, role: decoded.role, email: decoded.email });
//   } catch (err) {
//     res.status(401).json({ error: 'Invalid token' });
//   }
// };


exports.getMe = (req, res) => {
    const token = req.cookies.User_Jwt;
    if (!token) return res.status(401).json({ error: 'No token provided' });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.json({ id: decoded.id, role: decoded.role });
    } catch (err) {
      res.status(401).json({ error: 'Invalid token' });
    }
  };
  