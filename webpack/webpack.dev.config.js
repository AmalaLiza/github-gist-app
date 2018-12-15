const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getConfig = () => ({
  context: path.resolve(__dirname, '../'),
  devtool: 'eval-source-map',
  entry: {
    hot: [
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      // `webpack-dev-server/client?http://localhost:${port}`,
      // activate HMR for React
      'webpack/hot/dev-server',
      'react-hot-loader/patch',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
    ],
    main: [
      // the entry point of our app
      './src/index.js',
    ],
  },
  mode: 'development',
  output: {
    path: `${__dirname}/__build__`,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
    publicPath: '/',
    globalObject: 'this',
  },
  target: 'web',
  cache: true,
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg(2)?)(\?[a-z0-9]+)?$/,
        use: [
          { loader: 'file-loader' },
        ],
      },
      {
        test: /\.html$/,
        loader: 'url-loader',
        exclude: [/index.html/],
      },
      {
        test: /\.css$/,
        exclude: [/global.css/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: [/global.css/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

    ],
  },
  resolve: {
    unsafeCache: true,
    extensions: ['.js'],
    modules: [
      'node_modules',
      path.join(__dirname, '../src'),
    ],
  },
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.done.tap('Progress', (compilation) => {
          console.log(`\n Compilation took ${((compilation.endTime - compilation.startTime) / 1000)} s`);
        });
      },
    },
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
    }),
    // new CopyWebpackPlugin([
    //   { from: 'src/assets/favicon.jpg', to: 'favicon.jpg' },
    // ], { copyUnmodified: true }),
  ],
  externals: {
    'css-loader': 'css-loader',
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
});

module.exports = getConfig;
