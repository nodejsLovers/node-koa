var router = require('koa-router')();
var mongoose = require('mongoose');
var User = require('./../models/users.server.model.js')
router.get('/', function *(next) {
    this.body = yield User.find({});
});
router.get('/new', function *(next) {
    yield this.render('new', {
        title: '添加用户!'
    });
})

module.exports = router;
