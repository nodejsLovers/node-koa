var router = require('koa-router')();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', list);
router.get('/list', list);
router.get('/new', add);
router.get('/edit/:id', edit);
router.get('/delete/:id', del);


router.post('/create', create);
router.post('/save', save);

function *list(next) {
    var result = yield User.find({});
    yield this.render('/users/index', {
        title: '用户列表',
        users: result
    })
}

function *add(next) {
    yield this.render('/users/new', {
        title: '添加用户',
        user: {
            email: '',
            nickname: '',
            password: '',
            gender: 0,
            phone: null,
            imgUrl: '',
            address: ''
        }
    });
}

function *create(next) {
    var data = this.request.body;
    data.createTime = Date.now();
    data.lastLogin = Date.now();
    var user = new User(data);
    yield user.save();
    this.redirect('/users');
}


function *edit(next) {
    var id = this.params.id;
    var user = yield User.findOne(id);
    if (!user) this.throw(404, '没有找到这个用户');
    yield this.render('/users/edit', {
        title: '编辑用户',
        user: user
    })
}

function *save(next) {
    var data = this.request.body;
    var id = data._id;
    data.lastLogin = Date.now();
    var user = yield User.findOne(id);
    if (!user) this.throw(404, '没有找到这个用户');
    yield User.update({_id: id}, {
        $set: data
    });
    this.redirect('/users');
}

function *del(next) {
    var id = this.params.id;
    var user = yield User.findOne(id);
    if (!user) this.throw(404, '没有找到这个用户');
    yield User.remove({
        _id: id
    });
    this.redirect('/users');
}


module.exports = router;
