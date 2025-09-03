import { lazyLoad } from 'utils/loadable';

export const ProductPageLoadable = lazyLoad(
    () => import('./ProductPage'),
    module => module.ProductPage,
);