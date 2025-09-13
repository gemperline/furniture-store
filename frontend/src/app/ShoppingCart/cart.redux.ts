import {
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { CartState, ICartItem } from './types';
import { RootState } from 'src/types/RootState';

export const initialState: CartState = {
  items: [],
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<ICartItem[]>) => {
      state.items = action.payload.map((item) => ({
        ...item,
        quantity: 1,
      }));
    },
    addItem: (state, action: PayloadAction<ICartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== action.payload.id);
        }
      }
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