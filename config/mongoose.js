/**
 * Created by Administrator on 2016/5/27.
 */
var mongoose = require('mongoose');
var config = require('./config.js');

module.exports=function () {
    var db = mongoose.connect(config.mongodb);
    require('./../models/users.server.model.js');
    return db;
}
