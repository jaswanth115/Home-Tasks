const { merge } = require('webpack-merge');
 const common = require('./src/webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     static: './dist',
     inline:true,
     port:3500
   },
 });