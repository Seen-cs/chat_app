
const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  image: { type: String, required: true },
});

const blogSchema = new mongoose.Schema({
    mainTitle: { type: String, required: true },
    contents: [contentSchema],
  }, { timestamps: true });

module.exports = mongoose.model('Blog',blogSchema);

