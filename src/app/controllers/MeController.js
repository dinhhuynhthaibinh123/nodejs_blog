//lấy dữ liệu từ MODEL
const Course = require("../models/Course");
//chia hàm xử lí object mongoose
const { multipleMongooseToObject } = require("../../utils/mongoose");

class MeController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/stored-courses", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
   //[GET] /me/trash/courses
  trashCourses(req, res, next) {
    //Hàm này lấy dữ liệu mà deleted = true
    Course.findDeleted({})
      .then((courses) =>
        res.render("me/trash-courses", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
