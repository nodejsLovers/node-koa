/**
 * Created by Administrator on 2016/5/27.
 */
var mongoose = require('mongoose');
var config = require('./config.js');
mongoose.connect(
    config.mongodb,
    {server: {poolSize: 20}},
    function (err) {
        if (err) {
            console.error('connect to %s error: ', config.mongodb, err.message);
            process.exit(1);
        }
    }
);

require('../models/users.server.model');

exports.User = mongoose.model('User');
