const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const WebMaterialPlugin = require('web-material-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDevServer = path.basename(require.main.filename) === 'webpack-dev-server.js';

module.exports = {
  entry: '.',
  mode: isDevServer ? 'development' : 'production',
  // eslint-disable-next-line require-jsdoc
  get plugins() {
    return [
      new HtmlWebpackPlugin({
        hash: true,
        template: path.resolve(__dirname, 'index.ejs')
      }),
      new CopyWebpackPlugin([{
        from: 'content',
        to: 'content'
      }]),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:6].css',
        chunkFileName: 'css/[id].[contenthash:6].css'
      }),
      new SimpleProgressWebpackPlugin({
        format: isDevServer ? 'minimal' : 'verbose'
      }),
      // eslint-disable-next-line multiline-ternary
      ...(isDevServer ? [
        new OpenBrowserPlugin({url: `http://${this.devServer.host}:${this.devServer.port}`})
      ] : [
        new CleanWebpackPlugin({
          verbose: false
        })
      ]),
      new WebMaterialPlugin({
        test: /(\/material|\/page|\/view)-[^/]+\.js$/
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(web-material)\/).*/,
        use: [
          {
            loader: '@sucrase/webpack-loader',
            options: {
              transforms: []
            }
          },
          {
            loader: require.resolve('@open-wc/webpack-import-meta-loader')
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevServer
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|ico|webp|svg|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash:hex:6].[ext]',
              esModule: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '/material': path.resolve(__dirname, 'node_modules', 'web-material')
    }
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    runtimeChunk: 'single'
  },
  performance: {
    hints: false
  },
  devServer: {
    port: 3592,
    host: 'localhost',
    contentBase: path.resolve(__dirname, 'build'),
    stats: {
      all: false,
      colors: true,
      errors: true,
      warnings: true
    },
    clientLogLevel: 'error',
    noInfo: true,
    allowedHosts: ['localhost']
  }
};
