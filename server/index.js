const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const config = require("./config/key");
const cookieParser = require("cookie-parser");

const { User } = require("./models/User");
const { auth } = require("./middleware/auth");

mongoose
  .connect(config.mongoURL)
  .then(() => console.log("Server Connected!"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});
app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.get("/api/hello", (req, res) => {
  res.send("hello im in back!");
});

app.post("/api/users/login", (req, res) => {
  // 이메일이 있는지 확인
  User.findOne({ email: req.body.email }, (err, doc) => {
    if (!doc) return res.json({ success: false, message: "not found email" });
    // 이메일 존재한다면 비밀번호 확인 => 비밀번호 암호화 하여 비교
    doc.comparePassword(req.body.password, (err, isMatch) => {
      if (err) return res.json({ success: false, err });
      if (!isMatch)
        return res.json({ success: false, message: "not found password" });
      doc.generateToken((err, user) => {
        if (err) res.status(500).send(err);
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ success: true, userId: user._id });
      });
    });
  });
});

app.get("/api/users/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get("/api/users/logout", auth, (req, res) => {
  User.findByIdAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
