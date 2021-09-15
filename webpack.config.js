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
console.log('isDev: ', isDev);

const isProd = !isDev;

const devtool = () => isDev ? 'source-map' : false;
const mode = isProd ? 'production' : 'development';
const target = isProd ? `browserslist` : `web`;



export default {
  mode,
  target,

  output: {
    path: path.resolve(__dirname, outputDirectory),
    assetModuleFilename: `images/[hash][ext][query]`
  },
  
  resolve: {
    extensions: [`.js`, `.jsx`, `.json`, `.css`, `.ts`, `.tsx`]
  },

  devServer: {
    static: 'dist',
    hot: true,
    // port: 3000,
    // open: true,
    // historyApiFallback: true,
    // proxy: {
    //   '/api': 'http://localhost:8080'
    // }
  },
  devtool: devtool(),
  
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: `Осьминожки - товары для здоровья`,
      template: './src/index.html',
      favicon: './src/client/images/favicon.png'
    }),
    new MiniCssExtractPlugin(),
    new Dotenv()
  ],

  module: {
    rules: [
      {
        test: /\.(js?x)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        loader: `ts-loader`
      },
      {
        test: /\.md$/,
        use: "raw-loader",
      },
      {
        test: /\.(s[ac]|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: { publicPath: `` }
          },
          {
            loader: `css-loader`,
          },
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset',
        // parser: { // Картинки меньше этого размера он куда то девает))
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024
        //   }
        // }
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/inline',
      }
      // {
      //   test: /\.svg$/,
      //   use: [`@svgr/webpack`],
      // }
    ]
  },
}