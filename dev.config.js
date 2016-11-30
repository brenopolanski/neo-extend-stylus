const dev = require('mozilla-neo/config/webpack.dev');

dev.module.loaders.push({
  test: /\.styl$/,
  loader: 'style-loader!css-loader!stylus-loader'
});

module.exports = dev;
