const path = require('path');
// 导入html-webpack-plugin 可以生成一个预览页面
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin=require('vue-loader/lib/plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html" // 设置生成预览页面的名称
});
module.exports = {
    mode: 'development', // production
    // 指定打包入口
    entry: path.join(__dirname, './src/index2.js'),
    output: {
        // 输出文件路径
        path: path.join(__dirname, './dist'),
        // 输出文件名
        filename: 'bundle.js'
    },
    plugins: [htmlPlugin,new VueLoaderPlugin],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use: "url-loader?limit=16940"  //limit字节数  设置限制字节数 图片<16940byte会自动转为base64,大于则不改变
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },{
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    }
}