var router = require('koa-router')();
var mongoose = require('mongoose');
var User = require('./../models/users.server.model.js')
router.get('/', function *(next) {
    this.body = yield User.find({});
});

module.exports = router;
