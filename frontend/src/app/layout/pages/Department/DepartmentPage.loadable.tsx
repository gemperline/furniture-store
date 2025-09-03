import { lazyLoad } from 'utils/loadable';

export const DepartmentPageLoadable = lazyLoad(
    () => import('./DepartmentPage'),
    module => module.DepartmentPage,
);