const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
const hbs = require("express-handlebars");
const methodOverride = require('method-override')
const port = 3000;

const db = require("./config/db");

//connect to db
db.connect();

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
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(methodOverride('_method'));

//Route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
