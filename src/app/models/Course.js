const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: { type: String, maxlength: 255 },
  discription: { type: String, maxlength: 255 },
  image: { type: String, maxlength: 255 },
  slug: { type: String, maxlength: 255 },
});

module.exports = mongoose.model("Course", Course);
