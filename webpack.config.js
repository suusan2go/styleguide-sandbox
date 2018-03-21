// const src = __dirname + "/app/assests/stylesheets/cw-core";
const dist = __dirname + "/styleguide/dist"

var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./styleguide/index.js",
  output: {
    path: dist,
    filename: "index.min.js"
  },
  devServer: {
    contentBase: dist,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: "./styleguide/index.html"
    })
  ]
};

