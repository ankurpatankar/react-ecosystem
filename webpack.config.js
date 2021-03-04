// webpack config is always configured in commonjs as it transpiles es6 to commonjs
const path = require('path');
const webpack = require('webpack');

// For webpack 5 and above run `npx webpack serve --mode development`
// For webpack < 5 run `npx webpack-dev-server --mode development`
// `react-hot-loader` is what can be used in dev mode so we can reload app when any changes are made
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    // webpack uses loaders to transform code in some way
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // transform js and jsx
                exclude: /(node_modules)/, // don't transform node_modules
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist',
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};