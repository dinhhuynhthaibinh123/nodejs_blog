const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
  {
    name: { type: String, required: true, maxlength: 255 },
    description: { type: String},
    image: { type: String, maxlength: 255 },
    slug: { type: String, maxlength: 255 },
    level: { type: String, maxlength: 255 },
    videoId: { type: String, maxlength: 255 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
