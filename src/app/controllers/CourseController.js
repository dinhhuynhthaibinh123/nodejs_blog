const Course = require("../models/Course");
const { mongooseToObject } = require("../../utils/mongoose");

class CourseController {
  //[GET] /course/:slug
  show(req, res, next) {
    //res.send("slug: " + req.params.slug);
    // var query = { slug: req.params.slug };
    console.log(req.params.slug);
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
}

module.exports = new CourseController();