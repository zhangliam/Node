var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.get('/u/:user', function(req, res) {
  
})

router.post('/post', function(req, res) {
  
})

router.get('/reg', (req, res) => {

    //检验用户两次输入的口令是否一致
    if (req.body['password-repeat'] != req.body['password']) { 
        req.flash('error', '两次输入的口令不一致'); 
        return res.redirect('/reg'); 
    }

     //生成口令的散列值
    var md5 = crypto.createHash('md5'); 
    var password = md5.update(req.body.password).digest('base64'); 
    var newUser = new User({ 
        name: req.body.username, 
        password: password, 
    });

    User.get(newUser.name, function(err, user) { 
        if (user) 
            rr = 'Username already exists.'; 
        if (err) { 
            req.flash('error', err); 
            return res.redirect('/reg'); 
        } 
        //如果不存在则新增用户
        newUser.save(function(err) { 
            if (err) { 
                req.flash('error', err); 
                return res.redirect('/reg'); 
            } 
            req.session.user = newUser; 
            req.flash('success', '注册成功'); 
            res.redirect('/'); 
        }); 
    });

})

router.post('/reg', function(req, res) {
  
})

router.get('/login', function(req, res) {
  
})

router.post('/login', function(req, res) {
  
})

router.get('/logout', function(req, res) {
  
})


module.exports = router;
