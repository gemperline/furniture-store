import TerserJSPlugin from 'terser-webpack-plugin';
import * as plugins from './plugins';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({parallel:true})],
    },
    plugins: [
        plugins.copyPlugin,
        plugins.miniCssExtractPlugin,
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};