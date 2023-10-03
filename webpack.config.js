const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 5500,
    hot: false,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Page',
      filename: 'index.html',
      template: './src/template.html',
      favicon: './src/favicon.png',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
    assetModuleFilename: './assets/[name][ext]',
  },
}
