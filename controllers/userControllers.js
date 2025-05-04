

// // // // // This is the controller function
// // // // const getUsers = async (req, res) => {
// // // //     try {
// // // //       // You can use a database later; for now return dummy data
// // // //       const users = [
// // // //         { id: 1, name: 'John Doe' },
// // // //         { id: 2, name: 'Jane Smith' },
// // // //       ];
  
// // // //       res.status(200).json(users);
// // // //     } catch (error) {
// // // //       res.status(500).json({ message: 'Server Error' });
// // // //     }
// // // //   };
  
// // // //   module.exports = { getUsers };
  


// // // const User = require('../models/user');
// // // const bcrypt = require('bcryptjs');
// // // const jwt = require('jsonwebtoken');

// // // const createToken = (user) => {
// // //   return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
// // //     expiresIn: '7d',
// // //   });
// // // };

// // // // Register User or Admin
// // // exports.register = async (req, res) => {
// // //   const { name, email, password, role } = req.body;
// // //   try {
// // //     const hashed = await bcrypt.hash(password, 10);
// // //     const user = await User.create({ name, email, password: hashed, role });

// // //     const token = createToken(user);
// // //     res.cookie('token', token, { httpOnly: true });
// // //     res.status(201).json({ id: user._id, role: user.role });
// // //   } catch (err) {
// // //     res.status(400).json({ error: err.message });
// // //   }
// // // };

// // // // Login
// // // exports.login = async (req, res) => {
// // //   const { email, password } = req.body;
// // //   try {
// // //     const user = await User.findOne({ email });
// // //     if (!user) throw new Error('User not found');

// // //     const isMatch = await bcrypt.compare(password, user.password);
// // //     if (!isMatch) throw new Error('Invalid credentials');

// // //     const token = createToken(user);
// // //     res.cookie('token', token, { httpOnly: true });
// // //     res.json({ id: user._id, role: user.role });
// // //   } catch (err) {
// // //     res.status(400).json({ error: err.message });
// // //   }
// // // };

// // // // Logout
// // // exports.logout = (req, res) => {
// // //   res.clearCookie('token');
// // //   res.json({ message: 'Logged out' });
// // // };



// // const User = require('../models/user');
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');

// // exports.register = async (req, res) => {
// //   const { email, password, role } = req.body;

// //   try {
// //     const hash = await bcrypt.hash(password, 10);
// //     const user = await User.create({ email, password: hash, role });

// //     res.status(201).json({ message: 'User registered', userId: user._id });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // exports.login = async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(404).json({ error: 'User not found' });

// //     const match = await bcrypt.compare(password, user.password);
// //     if (!match) return res.status(401).json({ error: 'Invalid credentials' });

// //     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
// //       expiresIn: '1d'
// //     });

// //     res.cookie('token', token, {
// //       httpOnly: true,
// //       secure: false,
// //       sameSite: 'lax'
// //     });

// //     res.json({ message: 'Login successful', role: user.role });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };




// exports.login = async (req, res) => {
//   const { email, password, role } = req.body;
//   try {
//     const user = await User.findOne({ email, role });
//     if (!user) return res.status(400).json({ error: 'Invalid credentials' });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ error: 'Incorrect password' });

//     const token = createToken(user);
//     res.cookie('token', token, { httpOnly: true, secure: false });

//     res.json({ message: 'Login successful', id: user._id, role: user.role });
//   } catch (err) {
//     res.status(500).json({ error: 'Login failed' });
//   }
// };


// const User = require('../models/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const createToken = (user) =>
//   jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });


// // exports.register = async (req, res) => {
// //   const { role, email, password } = req.body;
// //   try {
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) return res.status(400).json({ error: 'Email already exists' });

// //     if (role === 'student') {
// //       const { firstName, lastName, phone, zip } = req.body;
// //       if (!firstName || !lastName || !phone || !zip) {
// //         return res.status(400).json({ error: 'Missing student info' });
// //       }
// //     } else if (role === 'admin') {
// //       const { adminName } = req.body;
// //       if (!adminName) {
// //         return res.status(400).json({ error: 'Missing admin name' });
// //       }
// //     }

// //     const hashedPassword = await bcrypt.hash(password, 10);
// //     const user = await User.create({ ...req.body, password: hashedPassword });

// //     const token = createToken(user);
// //     res.cookie('token', token, { httpOnly: true, secure: false });

// //     res.status(201).json({ message: 'Registered successfully', id: user._id, role: user.role });
// //   } catch (err) {
// //     console.error("Register error:", err);
// //     res.status(500).json({ error: 'Registration failed from backend' });
// //   }
// // };


// exports.register = async (req, res) => {
//   const { role, email, password } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });
//     console.log(existingUser)
//     if (existingUser) return res.status(400).json({ error: 'Email already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ ...req.body, password: hashedPassword });

//     const token = createToken(user);
//     res.cookie('token', token, { httpOnly: true, secure: false }); // set secure: true in production

//     res.status(201).json({ message: 'Registered successfully', id: user._id, role: user.role });
//   } catch (err) {
//     res.status(500).json({ error: 'Registration failed from backend' });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password, role } = req.body;
//   try {
//     const user = await User.findOne({ email, role });
//     if (!user) return res.status(400).json({ error: 'Invalid credentials' });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ error: 'Incorrect password' });

//     const token = createToken(user);
//     res.cookie('token', token, { httpOnly: true, secure: false });

//     res.json({ message: 'Login successful', id: user._id, role: user.role });
//   } catch (err) {
//     res.status(500).json({ error: 'Login failed' });
//   }
// };






// const User = require('../models/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const createToken = (user) =>
//   jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

// exports.register = async (req, res) => {
//   const { role, email, password } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ error: 'Email already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ ...req.body, password: hashedPassword });

//     const token = createToken(user);
//     // res.cookie('token', token, { httpOnly: true, secure: false });
//     res.cookie('User_Jwt', token, {
//       httpOnly: true,
//       secure: false, // change to true in production with HTTPS
//       sameSite: 'Lax', // or 'None' if frontend/backend are on different domains (and using HTTPS)
//     });

//     res.status(201).json({ message: 'Registered successfully', id: user._id, role: user.role });
//   } catch (err) {
//     res.status(500).json({ error: 'Registration failed' });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password, role } = req.body;
//   try {
//     const user = await User.findOne({ email, role });
//     if (!user) return res.status(400).json({ error: 'Invalid credentials' });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ error: 'Incorrect password' });

//     const token = createToken(user);
//     res.cookie('User_Jwt', token, {
//       httpOnly: true,
//       secure: false,
//       sameSite: 'Lax',
//       maxAge: 7 * 24 * 60 * 60 * 1000
//     });

//     res.json({ message: 'Login successful', id: user._id, role: user.role });
//   } catch (err) {
//     res.status(500).json({ error: 'Login failed' });
//   }
// };



const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Function to generate JWT token
// const createToken = (user) => {
//   return jwt.sign(
//     { id: user._id, role: user.role },
//     process.env.JWT_SECRET,
//     { expiresIn: '7d' }
//   );
// };

// Register user
exports.register = async (req, res) => {
  const { role, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: 'Email already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    // Generate token
    const token = createToken(user);

    // Set cookie
    res.cookie('User_Jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // true if in production
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      message: 'Registered successfully',
      id: user._id,
      role: user.role,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Login user
const createToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      firstName: user.firstName,
      email: user.email,
      role: user.role, // Include role in the token payload
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' } // Set token expiration (optional)
  );
};



exports.login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Find user by email and role (user/admin)
    const user = await User.findOne({ email, role });
    if (!user)
      return res.status(400).json({ error: 'Invalid credentials' });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: 'Incorrect password' });

    // Generate JWT token for the user/admin
    const token = createToken(user);

    // Set the token in a cookie
    res.cookie('User_Jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use 'secure' in production
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax', // SameSite config for cookies
      maxAge: 7 * 24 * 60 * 60 * 1000, // Token expiration time (7 days)
    });

    res.status(200).json({
      message: 'Login successful',
      id: user._id,
      role: user.role,
      firstName: user.firstName,  // Returning user details to frontend
      email: user.email,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login failed' });
  }
};

// exports.login = async (req, res) => {
//   const { email, password, role } = req.body;

//   try {
//     // Find user by email and role
//     const user = await User.findOne({ email, role });
//     if (!user)
//       return res.status(400).json({ error: 'Invalid credentials' });

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ error: 'Incorrect password' });

//     // Generate token
//     const token = createToken(user);

//     // Set cookie
//     res.cookie('User_Jwt', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
//       maxAge: 7 * 24 * 60 * 60 * 1000,
//     });

//     res.status(200).json({
//       message: 'Login successful',
//       id: user._id,
//       role: user.role,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Login failed' });
//   }
// };
