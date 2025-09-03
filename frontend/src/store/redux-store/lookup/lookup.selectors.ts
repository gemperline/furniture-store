import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../types/RootState';
import { initialState } from './initialState';

const domain = (state: RootState) => state?.lookup || initialState;

export const lookupSelector = createSelector(domain, state => state);
export const navigationItemsSelector = createSelector(domain, state => state.navigationItems);
export const lookupLoaderSelector = createSelector(domain, state => state.isLoaded);


