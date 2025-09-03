// eslint-disable-next-line-import/no-extraneous-dependencies
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config = {
    // options similar to the options in webpackOptions.output
    // both options are optional
    filename: 'styles/[name].[contenthash].css',
    chunkFilename: 'styles/[id].[contenthash].css',
};

export const miniCssExtractPlugin = new MiniCssExtractPlugin(config);