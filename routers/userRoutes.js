// // const express = require('express');
// // const router = express.Router();
// // const { getUsers } = require('../controllers/userControllers');

// // router.get('/', getUsers);

// // module.exports = router;

// // const express = require('express');
// // const router = express.Router();
// // const { register, login, logout } = require('../controllers/userControllers');

// // router.post('/register', register);     // role: user/admin
// // router.post('/login', login);
// // router.post('/logout', logout);

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { register, login } = require('../controllers/userControllers');
// const { verifyToken } = require('../middleware/authMiddleware');  // Adjust path if needed


// router.post('/register', register); // pass role: 'user' or 'admin'
// router.post('/login', login);


// // Helper function to verify token from cookie
// const verifyToken = (req, res) => {
//     const token = req.cookies.User_Jwt;
//     if (!token) return null;
//     try {
//       return jwt.verify(token, process.env.JWT_SECRET);
//     } catch {
//       return null;
//     }
//   };


//   // Define the route
// router.get('/user', (req, res) => {
//     const user = verifyToken(req, res);
//     if (!user) return res.status(401).json({ error: 'Unauthorized' });
  
//     res.json({
//       name: user.name,
//       email: user.email,
//       role: user.role,
//     });
//   });

// // router.get('/user', (req, res) => {
// //     const user = verifyToken(req, res); // Use your verification function here
// //     if (!user) return res.status(401).json({ error: 'Unauthorized' });
  
// //     // Return only the necessary user data
// //     res.json({
// //       name: user.name,
// //       email: user.email,
// //       role: user.role,
// //       // Add other fields you want to expose
// //     });
// //   });
  

// module.exports = router;


const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { register, login } = require('../controllers/userControllers');

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

module.exports = router;
