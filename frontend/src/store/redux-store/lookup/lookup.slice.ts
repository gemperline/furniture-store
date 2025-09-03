import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILookupState, initialState } from './initialState';

const lookupSlice = createSlice({
  name: 'lookup',
  initialState: initialState,
  reducers: {
    setNavigationItems(state, action: PayloadAction<ILookupState>) {
      state.navigationItems = action.payload.navigationItems;
    },
    getAllLookup() {},
  },
});

export const { actions: lookupActions, reducer: lookupReducer } = lookupSlice;
