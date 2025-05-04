

const express = require('express');
const router = express.Router();
// const Enrollment = require('../models/enrollment');
const Enrollment = require('../models/enrollment');


// Create enrollment
router.post('/', async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    const exists = await Enrollment.findOne({ studentId, courseId });
    if (exists) {
      return res.status(400).json({ error: 'Already enrolled in this course' });
    }

    const enrollment = new Enrollment({ studentId, courseId });
    await enrollment.save();

    res.status(201).json(enrollment);
  } catch (err) {
    res.status(500).json({ error: 'Enrollment failed', details: err.message });
  }
});
router.get('/student/:studentId', async (req, res) => {
  const { studentId } = req.params;
  try {
    const enrollments = await Enrollment.find({ studentId }).populate('courseId'); // Populate course data
    console.log("Fetching enrollments for student:", studentId); // ✅ Safe logging
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// router.get('/student/:studentId', async (req, res) => {
//   const { studentId } = req.params;
//   try {
//     const enrollments = await Enrollment.find({ studentId })
//       .populate('courseId'); // populate course details if needed
//       console.log(courseId)
//     res.json(enrollments);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

module.exports = router;
