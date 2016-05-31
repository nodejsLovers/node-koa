var router = require('koa-router')();
var mongoose = require('mongoose');
var User = mongoose.model('User');
router.get('/', list);

router.get('/list', list);
router.get('/new', add);
router.post('/create',save);


function *list(next) {
    var result = yield User.find({});
    console.log(result);
    yield this.render('/users/index', {
        title: '用户列表',
        users: result
    })
}

function *add(next) {
    yield this.render('/users/new', {
        title: '添加用户',
        user:{
            email: '',
            nickName: '',
            password: '',
            salt: '',
            gender: 0,
            phone: 0,
            imgUrl: '',
            address: ''
        }
    });
}

function *save(next) {
    console.log(this.request.body);
    var user = yield parse(this);
    user.createTime = new Date;
    users.lastLogin = new Date;
    var id = users.push(user)
    this.redirect('/');
}


module.exports = router;
