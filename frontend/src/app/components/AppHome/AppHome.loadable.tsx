import { lazyLoad } from '../../../utils/loadable';

export const AppHomeLoadable = lazyLoad(
  () => import('./AppHome'),
  module => module.AppHome,
);