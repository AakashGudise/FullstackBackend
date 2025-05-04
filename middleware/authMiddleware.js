// // // const jwt = require('jsonwebtoken');

// // // exports.verifyUser = (req, res, next) => {
// // //   const token = req.cookies.token;
// // //   if (!token) return res.status(401).json({ error: 'Unauthorized' });

// // //   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
// // //     if (err) return res.status(403).json({ error: 'Invalid token' });
// // //     req.user = decoded;
// // //     next();
// // //   });
// // // };

// // // exports.verifyAdmin = (req, res, next) => {
// // //   this.verifyUser(req, res, () => {
// // //     if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied' });
// // //     next();
// // //   });
// // // };


// // const jwt = require('jsonwebtoken');

// // exports.protect = (req, res, next) => {
// //   const token = req.cookies.token;
// //   if (!token) return res.status(401).json({ error: 'Not authorized' });

// //   try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     req.user = decoded;
// //     next();
// //   } catch (err) {
// //     res.status(401).json({ error: 'Invalid token' });
// //   }
// // };

// // exports.restrictTo = (role) => {
// //   return (req, res, next) => {
// //     if (req.user.role !== role) {
// //       return res.status(403).json({ error: 'Forbidden' });
// //     }
// //     next();
// //   };
// // };


// // // middleware/authMiddleware.js
// // const jwt = require('jsonwebtoken');

// // const requireAuth = (req, res, next) => {
// //   const token = req.cookies.User_Jwt;

// //   if (!token) return res.status(401).json({ error: 'Please login first' });

// //   try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     req.user = decoded;
// //     next();
// //   } catch (err) {
// //     return res.status(401).json({ error: 'Invalid token' });
// //   }
// // };

// // module.exports = requireAuth;

// const jwt = require('jsonwebtoken');

// // Middleware to verify token and get user ID
// const verifyToken = (req, res, next) => {
//   const token = req.cookies.User_Jwt || req.headers['authorization'].split(' ')[1];
//   if (!token) return res.status(403).json({ error: 'No token provided' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(403).json({ error: 'Invalid token' });
//     req.user = decoded;
//     next();
//   });
// };

// // Use this middleware to fetch courses for the logged-in user
// router.get('/student/courses', verifyToken, async (req, res) => {
//   try {
//     const enrollments = await Enrollment.find({ studentId: req.user.id }).populate('courseId');
//     res.json(enrollments.map(enr => enr.courseId)); // Return only course information
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch enrollments' });
//   }
// });




// In middlewares/auth.js or wherever you define your middlewares
const jwt = require('jsonwebtoken');

const verifyToken = (req, res) => {
  const token = req.cookies.User_Jwt; // The token should be stored under this name in cookies

  if (!token) return null;

  try {
    // Verify the token using the secret key
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};

module.exports = { verifyToken };
