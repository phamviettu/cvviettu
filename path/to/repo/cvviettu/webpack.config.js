const  path = require("path");
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    // devtool: 'cheap-module-eval-source-map',
    devtool: false,
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
    plugins: [
        new HtmlWebPackPlugin({
           template: path.resolve( __dirname, 'public/index.html' ),
           filename: 'index.html'
        })
     ]
}