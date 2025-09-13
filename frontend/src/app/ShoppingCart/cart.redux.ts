import {
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { CartState } from './types';
import { IProduct } from 'app/models/Product/product';
import { RootState } from 'src/types/RootState';

export const initialState: CartState = {
  items: [],
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<IProduct[]>) => {
      state.items = action.payload;
    },
    addItem: (state, action: PayloadAction<IProduct>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// const getItems = createAction('GET_ITEMS');

export const { name: cartSliceKey, reducer: cartReducer } = slice;

export const cartActions = {
  ...slice.actions,
  // getItems,
};

// SELECTORS
const selectDomain = (state: RootState) => state?.cart || initialState;

export const cartSelector = createSelector([selectDomain], (cart) => cart);

export const cartItemsSelector = createSelector(
  [selectDomain],
  (cart) => cart.items
);