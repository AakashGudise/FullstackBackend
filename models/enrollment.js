// // // models/Enrollment.js
// // const mongoose = require('mongoose');

// // const enrollmentSchema = new mongoose.Schema({
// //   student: {
// //     name: String,
// //     email: String,
// //     mobile: String,
// //   },
// //   course: {
// //     name: String,
// //   },
// // });

// // module.exports = mongoose.model('Enrollment', enrollmentSchema);


// const mongoose = require('mongoose');

// const enrollmentSchema = new mongoose.Schema({
//   studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
//   enrolledAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Enrollment', enrollmentSchema);



// const mongoose = require('mongoose');

// const enrollmentSchema = new mongoose.Schema({
//   studentId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   courseId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Course',
//     required: true,
//   },
//   enrolledAt: {
//     type: Date,
//     default: Date.now,
//   }
// });

// module.exports = mongoose.model('Enrollment', enrollmentSchema);


// const mongoose = require('mongoose');

// const enrollmentSchema = new mongoose.Schema({
//   studentId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   courseId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Course',
//     required: true,
//   },
//   enrolledAt: {
//     type: Date,
//     default: Date.now,
//   }
// });

// module.exports = mongoose.model('Enrollment', enrollmentSchema);

const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  enrolledAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
