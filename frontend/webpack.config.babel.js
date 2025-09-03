import merge from 'webpack-merge';
import baseConfig from './webpack/base';
import devConfig from './webpack/dev';
import prodConfig from './webpack/prod';
import { isProd } from './webpack/utils/env';

//eslint-disable-next-line import/no-anonymous-default-export
export default () => (isProd ? merge(baseConfig, prodConfig) : merge(baseConfig, devConfig));