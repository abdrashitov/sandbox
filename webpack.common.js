const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config({
  path: path.join(__dirname, '.env')
});

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle-[contenthash].js',
    publicPath: '/sandbox'
  },
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { allowTsInNodeModules: true }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // instead of style-loader
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                localIdentName: '[local]--[hash:base64:5]'
              }
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // instead of style-loader
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)([\?]?.*)$/,
        use: [
          {
            loader: 'file-loader?name=static/fonts/[name].[ext]'
          }
        ]
      },
      {
        test: /\.(svg)([\?]?.*)$/,
        use: [
          {
            loader: 'file-loader?name=static/images/[name].[ext]'
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          context: path.resolve(__dirname, 'src', 'static'),
          to: './static'
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style-[contenthash].css'
    }),
    new webpack.EnvironmentPlugin([
      'PUBLIC_URL',
      'REACT_APP_API',
      'REACT_APP_STATIC',
      'REACT_APP_INSTANCE',
      'REACT_APP_SMZ',
      'REACT_APP_CHAT_SOCKET'
    ]),
    new CleanWebpackPlugin(),
  ]
};
