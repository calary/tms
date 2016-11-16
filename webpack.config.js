var path = require('path');
var webpack = require('webpack');
// 为css添加各浏览器前缀
var autoprefixer = require('autoprefixer');
// 提取css为一个独立文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 注入打包的js和css文件，生成一个html
var HtmlWebpackPlugin = require('html-webpack-plugin');

var isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    // path: path.resolve(__dirname, './dist'),
    // publicPath: './',
    filename: './dist/[name].js'
  },
  module: {
    loaders: [
      // {
      //   test: /\.js$/, 
      //   loaders: ['ng-annotate'],
      //   exclude: /node_modules/
      // },
      {
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') 
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ],
  devServer: {
    contentBase: './',
    stats: 'minimal',
    inline: true,
    historyApiFallback: true/*,
    noInfo: true*/
  },
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin('./dist/[name].css', { disable: !isProd}),
    new HtmlWebpackPlugin({
      filename: 'index.html', 
      template:'./src/template.html',
      inject: true
    }),
    new webpack.OldWatchingPlugin()
  ]
}

if (isProd) {
  module.exports.devtool = '#source-map';

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
} 