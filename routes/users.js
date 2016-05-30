var router = require('koa-router')();
var mongoose = require('mongoose');
var User = mongoose.model('User');
router.get('/', list);

router.get('/list', list);
router.get('/new', add);


function *list(next) {
    var result = yield User.find({});
    console.log(result);
    yield this.render('/users/index', {
        title: '用户列表',
        users: result
    })
}

function *add(next) {
    yield this.render('new', {
        title: '添加用户'
    });
}


module.exports = router;
