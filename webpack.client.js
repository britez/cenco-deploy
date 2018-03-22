const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
});

const config = {
  // Tell webpack the root file of our
  // server application
  entry: ['./src/client/client.js', './src/client/styles/main.scss'],

  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: { includePaths: ['node_modules']}
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      },
      {
        test: /\.(woff|ott|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    extractSass,
  ],

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
};

module.exports = merge(baseConfig, config);
