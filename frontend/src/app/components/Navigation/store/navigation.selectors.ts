import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';

import { initialState, NavigationTypes } from './navigation.redux';

const selectDomain = (state: RootState) => state?.navigationMenu || initialState;

export const selectNavigationMenu = createSelector([selectDomain], list => list);
// export const selectNavigation = createSelector([selectDomain], option => option.selectedMenu);
// export const selectNavigationSubMenu = createSelector([selectDomain], option => option.selectedSubMenu);

export const navigationHelpers = createSelector([selectDomain], option => {
  return {
    getNavigationMenuByKey: (key: NavigationTypes) => option.navigationMenu.find(item => item.key === key),
  };
});
