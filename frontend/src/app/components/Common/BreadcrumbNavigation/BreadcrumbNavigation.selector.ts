import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';

import { initialState } from './BreadcrumbNavigation.redux';

const selectDomain = (state: RootState) => state.breadcrumb || initialState;

export const selectNavigationData = createSelector([selectDomain], navigationState => navigationState);
