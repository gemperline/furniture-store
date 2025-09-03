import { babelLoader } from "./useLoaderRuleItems";
import { join } from 'path';
import { rootDir }   from "../utils/env";

export const tsxLoader = {
    test: /\.(js|jsx|ts|tsx)?$/,
    loader: 'esbuild-loader',
    options: {
        target: 'es2015',
    },
    exclude: /node_modules/
};

export const javascriptRule = {
    test: /\.(js|jsx)$/,
    use: [babelLoader],
    exclude: /node_modules/,
};

export const htmlRule = {
    test: /\.(html)$/,
    use: {
        loader: 'html-loader',
    },
};

export const imagesRule = {
    test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
    use: {
        loader: 'url-loader',
    },
};

export const fontsRule = {
    test: /\.(woff(2)?|eot|ttf|otf|)$/,
    type: 'asset/inline',
};

export const webpack5esmInteropRule = {
    test: /\.m?js/,
    resolve: {
        fullySpecified: false,
    },
};