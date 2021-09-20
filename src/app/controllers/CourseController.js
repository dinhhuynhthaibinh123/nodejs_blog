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

  //[GET] /course/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] /course/store
  store(req, res, next) {
    // res.json(req.body);
    const formData = req.body;
    formData.image =
      "https://cdn.fullstack.edu.vn/f8-learning/courses/2/2.jpeg";
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  //[POST] /course/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("courses/edit", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  //[PUT] /course/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
  //[DELETE] /course/:id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //[DELETE] /course/:id/force
  forceDestroy(req, res, next) {
    //Xóa mắt tiêu luôn
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  //[PATCH] /course/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CourseController();
