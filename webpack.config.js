const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    fallback: {
        fs: false, // or require.resolve('fs')
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser')
      }
  }
};
