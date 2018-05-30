const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              "lodash",
              "transform-runtime",
              "transform-es2015-template-literals"
            ],
            presets: [["env",
              {
                "targets": {
                  "browsers": [
                    "last 2 versions",
                    "IE 11"
                  ]
                }
              }]]
          }
        }, 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.example.jsx$/,
        use: 'raw-loader'
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'public/index.ejs',
      baseUrl: '/',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
