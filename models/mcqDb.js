const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: String,
  isCorrect: Boolean,
});

const questionSchema = new mongoose.Schema({
  questionText: String,
  options: [optionSchema],
});

module.exports = mongoose.model('Question', questionSchema);
