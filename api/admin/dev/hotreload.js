/**
 * Created by Administrator on 2016/6/1.
 */
var webpack = require('webpack');
var webpackMiddleware = require("koa-webpack-dev-middleware");
module.exports = webpackMiddleware(webpack({
    // webpack options
    // webpackMiddleware takes a Compiler object as first parameter
    // which is returned by webpack(...) without callback.
    entry: "./app.js",
    output: {
        path: "/"
        // no real path is required, just pass "/"
        // but it will work with other paths too.
    }
}), {
    // all options optional

    noInfo: false,
    // display no info to console (only warnings and errors)

    quiet: false,
    // display nothing to the console

    lazy: true,
    // switch into lazy mode
    // that means no watching, but recompilation on every request

    aggregateTimeout: 300,
    // delay after change (only lazy: false)

    publicPath: "/assets/",
    // public path to bind the middleware to
    // use the same as in webpack

    headers: {"X-Custom-Header": "yes"},
    // custom headers

    stats: {
        colors: true
    }
    // options for formating the statistics
});