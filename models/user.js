// // const mongoose = require('mongoose');

// // const userSchema = new mongoose.Schema({
// //     role: { type: String, enum: ['student', 'admin'], required: true },
// //     firstName: String,
// //     lastName: String,
// //     phone: String,
// //     zip: String,
// //     adminName: String,
// //     email: { type: String, required: true, unique: true },
// //     password: { type: String, required: true },
// //   });

// // module.exports = mongoose.model('User', userSchema);


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   role: { type: String, enum: ['student', 'admin'], required: true },
//   firstName: String,
//   lastName: String,
//   phone: String,
//   zip: String,
//   adminName: String,
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// module.exports = mongoose.model('UserStudent', userSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['student', 'admin'],
    required: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  zip: {
    type: String,
    trim: true,
  },
  adminName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
