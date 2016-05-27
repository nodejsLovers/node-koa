<!--
author: 小莫
date: 2016-05-27
title: mongodb数据库的使用
tags: mongodb
category: mongodb
status: publish
summary: 最近在学习node，所以听说node和mongodb更配哦。。所以我就来学习mongodb了
-->

##一、mongodb的开启和关闭##

1. 查找mongod是否可用  
`which mongod`

2. 启动mongodb 指定path 和log日志
`mongod --dbpath /data2/db --port=27017 --fork /data2/db/log/mongod.log`

3. 关闭数据库  
`mongod --shutdown`


## 二、mongodb的操作 ##  

1. 连接服务器  
`mongod 115.29.137.34:27017`  

2. 使用数据库(不存在的数据库也可以使用,插入数据之后会自动保存)  
`use mydb`  

3. 权限登陆  
`db.auth('username','password')`

4. 展示数据库列表
`show dbs`

5. 插入数据(类似于mysql的表)  
`db.users.insert({'name':'xiaomo'})`  
`db.users.insert({'name':'xiaoming','age':25})`  
`db.users.insert({'name':'xiaoming','age':24,'sex':'女'})`

6. 查询集合(前提是use了一个数据库)  
`show collections`
有一个System.indexes 是索引

7. 不带条件查询  
`db.users.find()`  

8. 带条件查询(参数是一个对象)  
`db.users.find({'name':'xiaomo'})`  

9. 更新数据(有三个参数,1:查询条件,2:更新的内容 3：更新的配置)  
`db.users.update({'name':'xiaomo',{$set:{'name:'xm}})` //修改满足条件的第一条数据  
`db.users.update({'name':'xiaomo',{$set:{'name:'xm}},{multi:true})`  //修改所有满足条件的数据  

10. 保存数据(只有一个参数，必须要传id，后面是要修改的数据)  
`db.users.save({'id':'objectId(574710a97a3afd63cde56a49)','age':30})`  

11. 删除数据(1:条件 2 是否删除所有符合条件的)  
`db.users.remove({'name':'xiaomoing'},true)`  

12. 删除集合  
`db.users.drop()`  

##三、使用mongoose操作数据库##  

1. 模块的介绍  
连接mongdodb的驱动

2. 配置和链接  
`cnpm install --save mongoose`  

```
  var mongoose = require('mongoose');
  //var uri = 'mongodb://username:password@hostname:port/databasename';
  var uri = 'mongodb://xiaomo:xiaomo@115.29.137.34:27017/admin';
  mongoose.connect(uri);
```

3. Model 和Shema

```
 // model.js
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var BlogPost = new Schema({
    author    : ObjectId,
    title     : String,
    body      : String,
    date      : Date
});

//Model
mongoose.model('blog',Schema);

var Comment = new Schema({
  name: { type: String, default: 'hahaha' },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now }
});

// a setter
Comment.path('name').set(function (v) {
  return capitalize(v);
});

// middleware
Comment.pre('save', function (next) {
  notify(this.get('email'));
  next();
});

```

4. 创建文档  

```
  //insert.js
  var mongoose ＝ require('mongoose');
  require('./model.js'); //执行
  var Blog = mongoose.model('blog');
  var blog = new Blog({
      name:'xiaomo',
      age:25,
      bio:'don't know',
      date:new Date
    });

  book.save(function(err){
      console.log('save status:'+err);
    });
```

5. 删除文档  

```
  var mongoose = require('mongoose');
  require('./model.js');
  var Blog = mongoose.model('blog');
  Blog.findOne({'name':'xiaomo'},function(err,doc){
    if(err){
    console.log(err)
    return;
    }
    if(doc){
    doc.reomove();
  }
    })
```

6. 简单查询

```
  var mongoose = require('mongoose');
  require('./model.js');
  var Blog = mongoose.model('blog');
  Blog.find({},function(err,doc){
    if(err){
    console.log(err)
    return;
    }
    console.log('result',doc)
    })
```

第一个满足条件的结果

```
  var mongoose = require('mongoose');
  require('./model.js');
  var Blog = mongoose.model('blog');
  Blog.findOne({'name':'xiaomo'},function(err,doc){
    if(err){
    console.log(err)
    return;
    }
    console.log('result',doc)
    })
```

7. 条件语句  

```
 //condation.js
  var mongoose = require('mongoose');
  require('./model.js');
  var Blog = mongoose.model('blog');
  //名字是xiaomo或者xiaoming 可以用$or和$and
  var condation = {
    $or  $and:[
    {'name':'xiaomo'},
    {'name':'xiaoming'}
    ]
  }
  Blog.find(condation,function(err,doc){
    if(err){
    console.log(err)
    return;
    }
    console.log('result',doc)
    })
```


##三、在项目中使用mongoose##  

1. 生成项目
`koa koatest -e koatest`  

2. 安装依赖  
`cd koatest && cnpm install`

3. 安装mongoose  
`cnpm install --save mongoose`  

4. 创建模型  

```
  //models/users.server.model.js
  var mongoose = require('mongoose');
  var UserSchema = new mongoose.Schema({
      uid:Number,
      username:String,
      createTime:Date,
      lastLogin:Date
    })
  module.exports = mongoose.model('User',UserSchema);
```

5. 创建配置文件  

```
  //config/config.js
  module.exports={
    mongodb:'mongodb://xiaomo:xiaomo@115.29.137.34:27017/admin'
  }
  //config/mongoose.js
  var mongoose = require('mongoose');
  var config = require('./config.js');

  module.exports=function(){
    var db = mongoose.connect(config.mongodb);
    require('./../models/users.server.model.js');
    return db;
  }
```

6. 操作mongdodb  

```
  //routers/users.js


```
