export const devServerConfig = {
    client: {
        overlay: false,
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    hot: true,
    liveReload: true,
    static: {
        publicPath: '/',
    },
    compress: true,
};