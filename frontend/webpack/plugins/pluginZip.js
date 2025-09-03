const ZipPlugin = require('zip-webpack-plugin');

export const zipPlugin = new ZipPlugin({
    filename: 'modern-magic.zip',
});