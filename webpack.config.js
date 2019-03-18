var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body',
});

var config = {
    entry: ['./src/index.tsx'],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },

    mode: 'development',

    devtool: 'cheap-module-eval-source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
};

module.exports = config;
