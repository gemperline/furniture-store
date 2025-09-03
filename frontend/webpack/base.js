import path from 'path';
import { aliasItems } from './config';
import entry from './entry';
import * as plugins from './plugins';
import * as rules from './rules';
import { isDevServer, isProd } from './utils/env';
import { arrayFilterEmpty } from './utils/helpers';
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const ASSET_PATH = '/';

export default {
    context: __dirname,
    target: isDevServer ? 'web' : ['web', 'es5'],
    mode: isProd ? 'production' : 'development',
    entry,
    output: {
        path: path.join(__dirname, '../build'),
        publicPath: ASSET_PATH,
        filename: isDevServer ? 'js/[name].[fullhash].js' : 'js/[name].[contenthash].js'
    },

    module: {
        rules: arrayFilterEmpty([
            rules.tsxLoader,
            rules.htmlRule,
            rules.imagesRule,
            rules.fontsRule,
            rules.cssRule, // not being read in... ?
            rules.webpack5esmInteropRule
        ]),
    },
    plugins: arrayFilterEmpty([
        plugins.definePlugin,
        plugins.progressPlugin,
        plugins.htmlWebpackPlugin,
        new NodePolyfillPlugin(),
    ]),
    resolve: {
        alias: aliasItems,
        mainFields: ['module', 'browser', 'main'],
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        modules: ['node_modules'],
        fallback: {
            fs: false,
            module: false,
        },
    },
};
