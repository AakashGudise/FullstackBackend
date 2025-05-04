// // const express = require('express');
// // const router = express.Router();
// // const multer = require('multer');
// // const Course = require('../models/Course');

// // // Setup multer for file upload
// // const storage = multer.diskStorage({
// //   destination: './uploads/',
// //   filename: (req, file, cb) => {
// //     cb(null, `${Date.now()}_${file.originalname}`);
// //   }
// // });
// // const upload = multer({ storage });

// // // === POST /api/courses ===
// // router.post('/', upload.single('image'), async (req, res) => {
// //   try {
// //     const { title, description } = req.body;
// //     const image = req.file.filename;

// //     const course = new Course({ title, description, image });
// //     await course.save();

// //     res.status(200).json({ message: 'Course added successfully' });
// //   } catch (error) {
// //     res.status(500).json({ error: 'Failed to add course' });
// //   }
// // });

// // // === GET /api/courses ===
// // router.get('/', async (req, res) => {
// //   try {
// //     const courses = await Course.find();
// //     res.status(200).json(courses);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Failed to fetch courses' });
// //   }
// // });

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const Course = require('../models/Course');

// // Setup multer
// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });
// const upload = multer({ storage });

// // POST /api/courses
// router.post('/', upload.single('image'), async (req, res) => {
//     try {
//       const { title, description } = req.body;
//       const image = req.file.filename;
  
//       // Modules can be sent as an array or single string
//       const modules = Array.isArray(req.body.modules)
//         ? req.body.modules
//         : [req.body.modules];
  
//       const course = new Course({ title, description, image, modules });
//       await course.save();
  
//       res.status(200).json({ message: 'Course added successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Failed to add course' });
//     }
//   });
  
// // router.post('/', upload.single('image'), async (req, res) => {
// //   try {
// //     const { title, description } = req.body;
// //     const image = req.file.filename;

// //     const newCourse = new Course({ title, description, image });
// //     await newCourse.save();

// //     res.status(201).json({ message: 'Course added successfully' });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // GET /api/courses
// // Get course by ID
// router.get('/:id', async (req, res) => {
//     try {
//       const course = await Course.findById(req.params.id);
//       if (!course) {
//         return res.status(404).json({ message: 'Course not found' });
//       }
//       res.status(200).json(course);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch course' });
//     }
//   });
  
// router.get('/', async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.status(200).json(courses);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router; // ✅ THIS IS CRITICAL



const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Setup for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// @route POST /api/courses
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const modules = JSON.parse(req.body.modules);

    const course = new Course({
      title,
      description,
      image: req.file.filename,
      modules
    });

    await course.save();
    res.status(201).json({ message: 'Course created', course });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create course' });
  }
});

// @route GET /api/courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// @route GET /api/courses/:id
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});

module.exports = router;
