const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const config = require("./config/key");
const { User } = require("./models/User");

mongoose
  .connect(config.mongoURL)
  .then(() => console.log("Server Connected!"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});
app.post("/register", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
