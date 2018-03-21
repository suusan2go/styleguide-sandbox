const dist = __dirname + "/dist"

var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
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
          'css-loader',
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
    new HtmlWebpackPlugin({
      template: "./styleguide/index.html"
    })
  ]
};

