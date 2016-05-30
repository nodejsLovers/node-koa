var router = require('koa-router')();
var mongoose = require('mongoose');
var User = mongoose.model('User');
router.get('/', function *(next) {
    var users = yield User.find({});
    console.log(users);
    yield this.render('/users/index', {
        title: '用户列表',
        users: users
    })
});

router.get('/list', function *(next) {
    yield this.render('/users/index', {
        title: '用户列表',
        users: User.find({})
    })
});

router.get('/new', function *(next) {
    yield this.render('new', {
        title: '添加用户!'
    });
})

module.exports = router;
