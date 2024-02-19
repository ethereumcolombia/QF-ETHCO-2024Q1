const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.ts'],
    mainFields: ['module', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.(m?js|ts)?$/,
        exclude: new RegExp(`(node_modules|bower_components|\\.(test|spec)\\.?)`),
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            presets: [[require.resolve('@babel/preset-env'), { targets: { node: '16.6.0' } }]],
          },
        },
      },
    ],
  },
  // Use path.resolve to get an absolute path
  context: path.resolve(__dirname, 'src/lambda'),
  entry: {
    // Define your entries here, for example:
    // myFunction: './path/to/your/entry/file.js'
    // Ensure you replace './path/to/your/entry/file.js' with the actual path to your Lambda function entry file
    'register-user': './register-user.js',
    sponsor: './sponsor.js',
    recipient: './recipient.js',
  },
  target: 'node',
  plugins: [new Dotenv(), new webpack.IgnorePlugin({ resourceRegExp: /vertx/ })],
  // Use path.resolve to get an absolute path
  output: {
    path: path.resolve(__dirname, '.netlify/functions'),
    filename: '[name].js',
    libraryTarget: 'commonjs',
  },
  optimization: {
    nodeEnv: process.env.NODE_ENV || 'production',
  },
  bail: true,
  devtool: false,
  stats: {
    colors: true,
  },
}
