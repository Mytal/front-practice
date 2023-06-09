const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, 'src'),
        port: 8080,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test:/\.(s*)css$/,
                use: [ miniCss.loader, 'css-loader', 'sass-loader'],
            }
        ],
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ]
};