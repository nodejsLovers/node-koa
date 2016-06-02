if (process.env.NODE_ENV === 'production') {
    // 在linux 系统下 vim ~/.bash_profile 添加 export NODE_ENV=production
    module.exports = require('./Root.prod.js');
} else {
    module.exports = require('./Root.dev.js');
}
