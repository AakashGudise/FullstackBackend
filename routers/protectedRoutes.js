// // // const express = require('express');
// // // const router = express.Router();
// // // const { protect, restrictTo } = require('../middleware/authMiddleware');

// // // router.get('/course', protect, restrictTo('user'), (req, res) => {
// // //   res.json({ message: 'Course content for users' });
// // // });

// // // router.get('/admin/manage-quiz', protect, restrictTo('admin'), (req, res) => {
// // //   res.json({ message: 'Quiz management for admins' });
// // // });

// // // module.exports = router;


// // const express = require('express');
// // const router = express.Router();
// // const auth = require('../middleware/authMiddleware');

// // router.get('/student/course', auth(['student']), (req, res) => {
// //   res.json({ message: 'Welcome to student course content', id: req.user.id });
// // });

// // router.get('/admin/manage-quiz', auth(['admin']), (req, res) => {
// //   res.json({ message: 'Welcome to admin quiz manager', id: req.user.id });
// // });

// // module.exports = router;



// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');

// // Inline auth + role check
// const verifyToken = (req, res) => {
//   const token = req.cookies.token;
//   if (!token) return null;

//   try {
//     return jwt.verify(token, process.env.JWT_SECRET);
//   } catch {
//     return null;
//   }
// };

// router.get('/student/course', (req, res) => {
//   const user = verifyToken(req, res);
//   if (!user) return res.status(401).json({ error: 'Unauthorized' });
//   if (user.role !== 'student') return res.status(403).json({ error: 'Forbidden' });

//   res.json({ message: 'Welcome to student course content', id: user.id });
// });

// router.get('/admin/manage-quiz', (req, res) => {
//   const user = verifyToken(req, res);
//   if (!user) return res.status(401).json({ error: 'Unauthorized' });
//   if (user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });

//   res.json({ message: 'Welcome to admin quiz manager', id: user.id });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Inline auth + role check
const verifyToken = (req, res) => {
  const token = req.cookies.User_Jwt; // ✅ updated to match cookie name
  if (!token) return null;

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
};

router.get('/student/course', (req, res) => {
  const user = verifyToken(req, res);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  if (user.role !== 'student') return res.status(403).json({ error: 'Forbidden' });

  res.json({ message: 'Welcome to student course content', id: user.id });
});

router.get('/admin/manage-quiz', (req, res) => {
  const user = verifyToken(req, res);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  if (user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });

  res.json({ message: 'Welcome to admin quiz manager', id: user.id });
});

module.exports = router;
