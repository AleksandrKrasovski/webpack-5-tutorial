const HtmlWebpackPlugin = require('html-webpack-plugin') 

const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    clean: true,
    // assetModuleFilename: 'images/[hash:8][ext][query]',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack boilerplate',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html' // output file
    }),
  ],

  // mode: 'development'
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:iso|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash:8][ext][query]'
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      },
    ]
  },
}