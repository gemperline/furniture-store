import { join } from 'path';

// eslint-disable-next-line-import/no-extraneous-dependencies
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { rootDir } from '../utils/env';

const config = {
    hash: false,
    inject: true,
    appMountIds: ['root'],
    mobile: true,
    title: 'Modern Magic',
    meta: {
        description: 'Modern Magic Luxury Furniture',
        cdnUrl: '',
        cdnImageUrl: '',
    },
    minify: {
        collapseWhitespace: false,
    },
    window: {
        lifecycle: 'LOCAL',
    },
    filename: 'index.html',
    template: join(rootDir, './src/index.ejs'),
    uiConfig: {
        config: '/config.js',
    }
};

export const htmlWebpackPlugin = new HtmlWebpackPlugin(config);