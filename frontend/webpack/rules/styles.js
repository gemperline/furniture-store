import { isProd } from "../utils/env";
// eslint-disable-next-line-import/no-extraneous-dependencies
var postcssImport = require('postcss-import');
var postcssPresetEnv = require('postcss-preset-env');
var cssnano = require('cssnano');
// eslint-disable-next-line-import/no-extraneous-dependencies
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
/** css **/
export const cssRule = {
    test: /\.css$/,
    use: [
        !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                sourceMap: isProd,
                importLoaders: 1,
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
                postcssOptions: {
                    plugins: [postcssImport, postcssPresetEnv, cssnano],
                },
            },
        },
    ],
};