const HtmlWebpackPlugin = require('html-webpack-plugin');
require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          'css-loader',

        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
              outputPath: '/src/assets/',
            },
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
