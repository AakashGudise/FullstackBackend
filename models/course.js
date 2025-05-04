// const mongoose = require('mongoose');

// const courseSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
// });

// module.exports = mongoose.model('Course', courseSchema);


// const mongoose = require('mongoose');

// const courseSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   image: String
// });

// module.exports = mongoose.model('Course', courseSchema);
// const mongoose = require('mongoose');

// const courseSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   image: String,
//   modules: [String] // Array of module titles
// });

// module.exports = mongoose.model('Course', courseSchema);


const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // path to image file
  modules: [moduleSchema]
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);

