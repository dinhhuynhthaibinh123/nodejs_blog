const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
const hbs = require("express-handlebars");
const port = 3000;

//static path
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  hbs({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

console.log("PATH", __dirname);

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
