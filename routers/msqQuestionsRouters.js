// const express = require('express');
// const router = express.Router();
// const Question = require('../models/Question');

// // Create
// router.post('/', async (req, res) => {
//   try {
//     const question = await Question.create(req.body);
//     res.status(201).json(question);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Read
// router.get('/', async (req, res) => {
//   const questions = await Question.find();
//   res.json(questions);
// });

// // Update
// router.put('/:id', async (req, res) => {
//   const updated = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updated);
// });

// // Delete
// router.delete('/:id', async (req, res) => {
//   await Question.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Deleted' });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Question = require('../models/mcqDb'); // adjust the path if needed

// CREATE
router.post('/', async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
