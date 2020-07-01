// const webpack = require('webpack');
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const config = {
//   entry: {
//     // polyfills: './src/polyfills.js',
//     index: './src/index.tsx',
//   },
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: '[name].bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts(x)?$/,
//         loader: 'ts-loader',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//       },
//       {
//         test: /\.scss$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
//       },
//     ],
//   },
//   devServer: {
//     contentBase: path.join(__dirname, 'public'),
//     compress: true,
//     port: 9000,
//   },
//   resolve: {
//     modules: [path.join(__dirname, 'src'), 'node_modules'],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       hash: true,
//       template: path.join(__dirname, './index.html'),
//       appMountId: 'app',
//       // filename: "index.html",
//     }),
//     new BundleAnalyzerPlugin({
//       analyzerMode: 'static',
//       openAnalyzer: false,
//     }),
//     new MiniCssExtractPlugin(),
//   ],
// };

// module.exports = config;

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'postcss-loader',
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   appMountId: 'app',
    //   filename: 'index.html',
    // }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new LodashModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
  ],
  // devServer: {
  //   contentBase: './dist'
  // }
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
};

module.exports = config;
