/**
 * 帮助类
 * @author: @xiaomo
 */

var path = require('path');

// Helper functions
var ROOT = path.resolve(__dirname, '..');
console.log('项目根目录:', root() + '\n');


/**
 * 运行的脚本中是否包含当前flag
 * @param flag
 * @returns {boolean}
 * 包含 true
 * 否则 false
 */
function hasProcessFlag(flag) {
    return process.argv.join('').indexOf(flag) > -1;
}

/**
 *
 * @param args 一个类数组
 * @returns {string}
 * 传入一个类数组,转成数组并拼上根目录
 */
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    console.log(path.join.apply(path, [ROOT].concat(args)));
    return path.join.apply(path, [ROOT].concat(args));
}


exports.hasProcessFlag = hasProcessFlag;
exports.root = root;
