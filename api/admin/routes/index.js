var router = require('koa-router')();

router.get('/', async function (ctx) {
    ctx.body = '后台api接口项目启动成功！！'
});
module.exports = router;
