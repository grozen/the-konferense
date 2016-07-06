var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: [
      './source/stylesheets/application.scss',
      './source/javascripts/index.js'
    ],
    vendor: ['babel/polyfill']
  },

  resolve: {
    root: __dirname + '/source/javascripts',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js',
  },

  module: {
    loaders: [{
      test: /source\/javascripts\/.*\.js$/,
      exclude: /node_modules|\.tmp|vendor/,
      loaders: ['babel'],
    },
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
    {
      test: /.*\.scss$/,
      // loaders: ['style', 'css', 'sass']
      loader: ExtractTextPlugin.extract(
        "style",
        "css!sass?sourceMap&includePaths[]=" + __dirname + "/node_modules"
      )
    },

     { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
     { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
  ],
  },

  plugins: [
    new ExtractTextPlugin("stylesheets/app.css")
  ]
};
