/**
 * @yag/is-array
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @license   BSD 3 Clause (see LICENSE.txt)
 * @link      https://github.com/yasselavila/is-array
 */

const path = require('path');
const { EnvironmentPlugin, LoaderOptionsPlugin } = require('webpack');
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    'isarray': path.resolve('src/index')
  },
  output: {
    path: path.resolve('dist/bundles'),
    filename: '[name].umd.bundle.js',
    libraryTarget: 'umd',
    sourceMapFilename: '[name].umd.bundle.js.map',
    chunkFilename: '[name].umd.[chunk].js',
    pathinfo: false
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    /* Check and emit types in a separate process */
    new CheckerPlugin(),
    /* Make sure all dependencies are built in production mode */
    new EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG: false
    }),
    /* Enable module concatenation */
    new ModuleConcatenationPlugin(),
    /* Enable minify */
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    /* Minify the ouput */
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 5,
        ie8: true,
        mangle: false,
        output: {
          comments: false,
          beautify: false
        }
      }
    })
  ]
};
