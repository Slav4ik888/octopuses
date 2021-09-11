import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Dotenv from 'dotenv-webpack';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDirectory = 'dist';


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const devtool = () => isDev ? 'source-map' : false;
const mode = isProd ? 'production' : 'development';



export default {
  entry: {
    main: path.resolve(__dirname, `./src/index.tsx`)
  },

  output: {
    path: path.join(__dirname, outputDirectory),
    filename: `bundle.js`,
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
  devtool: devtool(),
  mode,

  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: `Осьминожки - товары для здоровья`,
      template: './public/index.html',
      favicon: './public/img/favicon.png'
    }),
    new MiniCssExtractPlugin(),
    new Dotenv()
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
          // options: {
          //   presets: [
          //     ['@babel/preset-env', { targets: "defaults" }]
          //   ]
          // }
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      },
      {
        test: /\.md$/,
        use: "raw-loader",
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
}