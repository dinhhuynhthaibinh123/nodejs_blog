const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
  {
    name: { type: String, required: true, maxlength: 255 },
    description: { type: String },
    image: { type: String, maxlength: 255 },
    slug: { type: String, maxlength: 255 },
    level: { type: String, maxlength: 255 },
    videoId: { type: String, maxlength: 255 },
    // deleteAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});
module.exports = mongoose.model("Course", Course);
