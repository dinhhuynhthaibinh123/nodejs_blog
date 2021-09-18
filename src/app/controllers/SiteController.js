//lấy dữ liệu từ MODEL
const Course = require("../models/Course");
//chia hàm xử lí object mongoose
const { multipleMongooseToObject } = require("../../utils/mongoose");

class SiteController {
  //[GET] Home
  index(req, res, next) {
    //callback
    // Course.find({}, function (err, courses) {
    //   if (!err) res.json(courses);
    //   else console.log("Error");
    // });

    //promise
    //Xử lý truyền dữ liều và render VIEW
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
    // res.render("home");
  }
  //[GET] search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
