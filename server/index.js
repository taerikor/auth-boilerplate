const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } = require('./models/User')
const mongoose = require('mongoose');
const config = require('./config/key');
const cookieParser = require('cookie-parser')
const { auth } = require('./middleware/auth')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser());


mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요!')
})


app.post('/api/users/register', (req, res) => {
    //회원 가입 할때 필요한 정보들을 client에서 가져오면
    //그 정보를 데이터 베이스에 넣어준다.
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

app.post('/api/users/login', (req, res) => {
    // 요청된 이메일을 데이터베이스에서 았는지 찾는다.
    User.findOne({ email : req.body.email }, (err, user) => {
        if(!user){
            return res.json({
                loginSuccess: false,
                message: "Email not found"
            })
        }

        // 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password"});

            // 비밀번호까지 맞다면 토큰을 생성하기
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);
                
                // 토큰을 저장 (쿠키, 로컬스토리지 중 쿠키)
                res.cookie("x_auth", user.token)
                .status(200)
                .json({ loginSuccess: true, userId: user._id });
            });
        });
    });
});

app.get('/api/users/auth', auth,(req, res) => {

    // 여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 true란 말.
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    });
});

app.get('/api/users/logout', auth, (req, res) => {
    
    User.findOneAndUpdate({ _id: req.user._id }, 
        { token: "" }
        , (err, user) => {
            if(err) return res.json({ success: false, err });
            return res.status(200).send({
                success: true
            });
        }
    );

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})