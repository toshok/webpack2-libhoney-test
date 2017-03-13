const path = require("path");

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    imported: './imported.js',
    required: './required.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015-node4'] }
        }]
      },
    ]
  }
};
    
    
