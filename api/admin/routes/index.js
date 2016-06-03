var router = require('koa-router')();

router.get('/', async function (ctx, next) {
    ctx.body = {
        title: 'koa2 title'
    };
});
module.exports = router;
