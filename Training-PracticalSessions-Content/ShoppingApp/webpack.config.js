var webpack = require('webpack');
var config = {
   entry: './client/main.js',
   
   output: { 
      filename: 'bundle.js'
   },
   
   devServer: {
      inline: true,
      port: 8080
   },
   plugins: [
      /*new webpack.optimize.UglifyJsPlugin({
         compressor:{
            warnings:false
         }
      })*/
  ],
   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;
