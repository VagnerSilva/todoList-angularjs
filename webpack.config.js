// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const autoprefixer = require('autoprefixer');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const pkg = require('./package.json');
// const extractTextPlugin = require('extract-text-webpack-plugin');



// // const bundleExtractPlugin = new extractTextPlugin({
// //   filename: 'css/bundle.css',
// // });

// module.exports = {

//   mode: 'production',
//   entry: {
//     'index': path.join(__dirname, 'src/app/app.module.js'),
//     vendor: ['angular']
//   },
//   output: {
//     filename: '[name]-bundle.js',
//     path: path.join(__dirname, '/dist/'),
//     sourceMapFilename: '[name].js.map'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/, 
//         exclude: /node_modules/,
//         use: [
//           { loader: 'ng-annotate-loader' },
//           { loader: 'babel-loader' },
//         ]
//       },
//       { test: /\.css$/, loader: 'style-loader!css-loader' },
//       {
//         test: /\.(scss|sass)$/,
//         exclude: /node_modules/,
//         use: bundleExtractPlugin.extract({
//           fallback : 'style-loader',
//           use: ['css-loader', 'sass-loader'],
//         }),
//       },
//       { test: /\.html$/, loader: 'raw-loader' },
//       // inline base64 URLs for <=8k images, direct URLs for the rest
//       { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
//       // helps to load bootstrap's css.
//       {
//         test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
//         loader: 'url?limit=10000&minetype=application/font-woff'
//       },
//       {
//         test: /\.woff2$/,
//         loader: 'url?limit=10000&minetype=application/font-woff'
//       },
//       {
//         test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
//         loader: 'url?limit=10000&minetype=application/octet-stream'
//       },
//       {
//         test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
//         loader: 'file'
//       },
//       {
//         test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
//         loader: 'url?limit=10000&minetype=image/svg+xml'
//       }
//     ]
//   },
//   optimization: {
//     splitChunks: {
//       cacheGroups: {
//         commons: {
//           // test: /[\\/]node_modules[\\/]/,
//           name: 'vendor',
//           chunks: 'all'
//         }
//       }
//     }
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new HtmlWebpackPlugin({
//       template: 'src/index.html',
//       inject: 'body',
//       pkg: pkg,
//       hash: true
//     }),
//     new webpack.LoaderOptionsPlugin({
//       test: /\.(scss|sass)$/i,
//       options: {
//         postcss: {
//           plugins: [autoprefixer]
//         }
//       }
//     }),
//     new extractTextPlugin({
//       filename: 'dist/[name].bundle.css',
//       allChunks: true,
//     })

//   ],
//   devServer: {
//     publicPath: '/',
//     contentBase: path.join(__dirname, '/dist'),
//     compress: true
//   }
// }

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const autoprefixer = require('autoprefixer');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/app/app.module.js'),

  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 9000,
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'ng-annotate-loader' },
          { loader: 'babel-loader' },
        ]
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.woff2$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=image/svg+xml'
      },
      {
        test: /\.s?css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          enforce: true
        },
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      pkg: pkg,
      hash: true
    })
  ],
  devtool: 'eval'
}