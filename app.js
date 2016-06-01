var app = require('koa')()
    , router = require('koa-router')()
    , logger = require('koa-logger')
    , json = require('koa-json')
    , views = require('koa-views')
    , onerror = require('koa-onerror')
    , mongoose = require('./config/mongoose.js')
    , bodyParser = require('koa-bodyparser')
    , hotreload = require('./dev/hotreload')
    , db = mongoose();

// routers
var index = require('./routes/index');
var users = require('./routes/users');

// global middlewares
app.use(views('views', {
    root: __dirname + '/views',
    default: 'ejs'
}));
app.use(bodyParser());
app.use(json());
app.use(logger());
app.use(hotreload);

app.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());

// mount root routes  
app.use(router.routes());

app.on('error', function (err, ctx) {
    logger.error('server error', err, ctx);
});

module.exports = app;
