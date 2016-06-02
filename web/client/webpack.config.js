// process.env.NODE_ENV = 'production';
if (process.env.NODE_ENV === 'production') {
    console.info('当前系统环境是' + process.env.NODE_ENV);
    module.exports = require('./config/webpack.prod.js');
} else {
    console.info('当前系统环境是[测试环境]');
    module.exports = require('./config/webpack.dev.js');
}
