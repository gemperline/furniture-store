import { lazyLoad } from 'utils/loadable';

export const ShoppingCartPageLoadable = lazyLoad(
  () => import('./ShoppingCartPage'),
  (module) => module.ShoppingCartPage
);