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
 * @Date: 2016/5/18 16:04
 * @Description:
 * @Copyright(©) 2015 by xiaomo.
 **/
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var copyWebpackPlugin = require('copy-webpack-plugin');
var extraTextWebpackPlugin = require('extract-text-webpack-plugin');
//模块化的写化
module.exports = {

    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    // 输出路径和输出文件的名字
    output: {
        path: __dirname + '/../dist',
        filename: '[hash].bundle.js',
        // publicPath: 'http://localhost:8080/',
        chunkFilename: '[hash].bundle.js'
    },
    //配置loader
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader', 'babel-loader'],
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
            template: './src/public/index.html',
            inject: 'body'
        }),
        new copyWebpackPlugin([
            {
                from: __dirname + '/src/public'
            }
        ]),
        new webpack.optimize.CommonsChunkPlugin('[hash].common.js'),
        new webpack.HotModuleReplacementPlugin(),
        new extraTextWebpackPlugin(
            '[hash].bundle.css'
        ),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            fetch: 'imports?this=>global!exports?global.fetch!isomorphic-fetch'
        })
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
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },
    resolve: {
        extensions: ['', '.js', '.json']
    }
};