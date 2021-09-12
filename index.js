const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  var a = 0;
  var b = 10;

  var c = a + b;
  res.send("Hello World! ww");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
