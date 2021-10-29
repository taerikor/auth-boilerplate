const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://<username>:<password>@boilerplate.xglo6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {}
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
