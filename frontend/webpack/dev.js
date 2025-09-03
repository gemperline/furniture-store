import { devServerConfig } from "./config";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    devtool: 'eval-source-map',
    mode: 'development',
    plugins: [

    ],
    devServer: devServerConfig,
};