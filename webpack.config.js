// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
const webpack = require('webpack');
const path = require('path');
const cwd = path.resolve('./');

module.exports = {
  debug: true,
  devtool: '#source-map',

  entry: {
      'vendor': './src/vendor.js',
      'shared': './src/shared'
  },

  output: {
    path: path.join(__dirname, 'app'),
    publicPath: '/',
    filename: 'app/[name].js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        loader: "style-loader!css-loader",
        test: /\.css$/
      }, {
        loader: 'babel-loader',

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        exclude: /node_modules/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  }
};
