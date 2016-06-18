/**
 * 把今天最好的表现当作明天最新的起点．．～
 * いま 最高の表現 として 明日最新の始発．．～
 * Today the best performance  as tomorrow newest starter!
 * Created by IntelliJ IDEA.
 *
 * @author: xiaomo
 * @github: https://github.com/qq83387856
 * @email: hupengbest@163.com
 * @QQ_NO: 83387856
 * @Date: 2016/6/6 16:04
 * @Description:
 * @Copyright(©) 2015 by xiaomo.
 **/
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var copyWebpackPlugin = require('copy-webpack-plugin');
var extraTextWebpackPlugin = require('extract-text-webpack-plugin');
console.log("dev" + __dirname + '../app/public');
//模块化的写化
module.exports = {
    entry: [
        './app/main.js'
    ],
    // 输出路径和输出文件的名字
    output: {
        path: __dirname + '/../dist',
        filename: '[hash].bundle.js',
        chunkFilename: '[hash].bundle.js'
    },
    //配置loader
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: extraTextWebpackPlugin.extract(
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                )
            },
            {
                test: /\.scss$/,
                loader: extraTextWebpackPlugin.extract(
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                )
            }, {
                test: /\.less$/,
                loader: extraTextWebpackPlugin.extract(
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                )
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loaders: ['file-loader?limit=81920']
            }, {
                test: /\.json$/,
                loaders: ['json-loader']
            }, {
                test: /\.html$/,
                loader: 'raw'
            }

        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body'
        }),
        new copyWebpackPlugin([
            {
                from: __dirname + './../public'
            }
        ]),
        new webpack.optimize.CommonsChunkPlugin('[hash].common.js'),
        new webpack.HotModuleReplacementPlugin(),
        new extraTextWebpackPlugin(
            '[hash].bundle.css'
        )
    ],
    postcss: [autoprefixer({
        browsers: ['last 2 version']
    })],
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        noInfo: false,
        inline: true
    },
    resolve: {
        extensions: ['', '.js', '.json']
    }
};