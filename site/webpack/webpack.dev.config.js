const merge = require('webpack-merge');
const webpack = require('webpack');

const base = require('./webpack.config');

module.exports = merge.smart(base, {
  entry: {
    docs: [
      './src/desktop/index.js',
    ],
    simulator: [
      './src/simulator/index.js'
    ]
  },

  devServer: {
    host: 'localhost',
    port: 4396,
    hot: true,
    open: true,
  },

  devtool: 'inline-cheap-module-source-map',

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
