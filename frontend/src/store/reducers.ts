import { combineReducers } from '@reduxjs/toolkit';
// import { reducer as oidcReducer } from 'redux-oidc';

import { InjectedReducersType } from '../utils/types/injector-typings';
import { lookupReducer } from './redux-store/lookup/lookup.slice';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return state => state;
  } else {
    return combineReducers({
      ...injectedReducers,
    //   oidc: oidcReducer,
      lookup: lookupReducer,
    });
  }
}
