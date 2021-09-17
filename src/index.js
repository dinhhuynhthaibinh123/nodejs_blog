const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
const hbs = require("express-handlebars");
const port = 3000;

//Có file index cũng được không có thì nó sẽ tự tìm
// const route = require("./routes/index")
const route = require("./routes/index");

//static path
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
// app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  hbs({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
// app.use(express.json());

//Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
