import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDirectory = 'dist';


export default {
  entry: {
    main: path.resolve(__dirname, `./src/index.js`)
  },
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: `bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: `style-loader`
          },
          {
            loader: `css-loader`,
          },
          {
            loader: `sass-loader`,
          }
        ]
      },
      {
        test: /\.(jp(e*)g|png|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: [`@svgr/webpack`],
      }
    ]
  },
  resolve: {
    extensions: [`*`, `.js`, `.jsx`, `.json`, `.css`, `.ts`, `.tsx`]
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: `Осьминожки`,
      template: './public/index.html',
      favicon: './public/img/favicon.png'
    })
  ]
}