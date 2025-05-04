// models/EnrolledCourse.js
// const mongoose = require('mongoose');

// const enrolledCourseSchema = new mongoose.Schema({
//   studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Or use email/mobile
//   courseTitle: String,
//   courseDescription: String,
// });

// module.exports = mongoose.model('EnrolledCourse', enrolledCourseSchema);


const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courses: [
    {
      courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('EnrolledCourse', enrollmentSchema);

