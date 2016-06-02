/**
 * Created by Administrator on 2016/5/27.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//创建模型
var UserSchema = new Schema({
    email: String,
    nickname: String,
    password: String,
    salt: String,
    gender: Number,
    phone: Number,
    imgUrl: String,
    address: String,
    createTime: Date,
    lastLogin: Date
});

//注册并导出
module.exports = mongoose.model('User', UserSchema);