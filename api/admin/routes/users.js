var router = require('koa-router')();
var User = require('../config/mongoose').User;
var moment = require('moment');

router.get('/', list);
router.get('/list', list);
router.get('/add', add);
router.get('/edit/:id', edit);
router.get('/delete/:id', del);

router.post('/save', save);

async function list(ctx) {
    var result = await User.find({});
    for (var i = 0; i < result.length; i++) {
        result[i]._doc.createTime = moment(result[i].createTime).format("YYYY-MM-DD HH:mm:ss");
        result[i]._doc.lastLogin = moment(result[i].lastLogin).format("YYYY-MM-DD HH:mm:ss");
    }
    ctx.body = {
        users: result
    }
}

async function add(ctx, next) {
    var data = ctx.body;
    data.createTime = Date.now();
    data.lastLogin = Date.now();
    var user = new User(data);
    await user.save();
    ctx.redirect('/users');
}


async function edit(ctx, next) {
    var id = ctx.params.id;
    var user = await User.findOne(id);
    if (!user) ctx.throw(404, '没有找到这个用户');
    await ctx.render('/users/edit', {
        title: '编辑用户',
        user: user
    })
}

async function save(ctx, next) {
    var data = ctx.body;
    var id = data._id;
    data.lastLogin = Date.now();
    var user = await User.findOne(id);
    if (!user) ctx.throw(404, '没有找到这个用户');
    await User.update({_id: id}, {
        $set: data
    });
    ctx.redirect('/users');
}

async function del(ctx, next) {
    var id = ctx.params.id;
    var user = await User.findOne(id);
    if (!user) ctx.throw(404, '没有找到这个用户');
    await User.remove({
        _id: id
    });
    ctx.redirect('/users');
}


module.exports = router;
