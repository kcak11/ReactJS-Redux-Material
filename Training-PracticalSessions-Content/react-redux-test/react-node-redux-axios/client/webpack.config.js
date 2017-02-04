//================
// Import webpack, and our new extract text plugin so that we
// can use it.
//================
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//================
// We've added our scss loader here, and then added the plugins
// below that will compile our scss into css and deposit it in
// our assets/stylesheets directory.
//================
module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  debug: true,
  devtool: "#eval-source-map",
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  plugins: [
    new ExtractTextPlugin('src/assets/stylesheets/app.css', { allChunks: true })
  ]
};
