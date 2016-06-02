/**
 * Created by Administrator on 2016/5/27.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//创建模型
var AdminSchema = new Schema({
    userName: String,
    password: String,
    salt: String,
    gender: Number,
    authLevel: Number,
    operator: String,
    createTime: Date,
    lastLogin: Date
});

//注册并导出
module.exports = mongoose.model('Admin', AdminSchema);