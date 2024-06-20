var path=require('path');
var webpack = require('webpack');
var config = {
   devServer:{
      inline:true,
      contentBase: './src',
      port:3000
   },
   devtool:'cheap-module-eval-source-map',
   entry:'./dev/js/index.js',
   module:{
      loaders:[
         {
            test:/\.js$/,
            loaders:['babel-loader'],
            exclude:/node_modules/
         },
         {
            test:/\.scss/,
            loader:'style-loader!css-loader!sass-loader',
         }
      ]
   },
   output:{
      path:'src',
      filename:'js/bundle.min.js'
   },
   plugins:[
      new webpack.optimize.OccurrenceOrderPlugin()
   ]
};
module.exports = config;
