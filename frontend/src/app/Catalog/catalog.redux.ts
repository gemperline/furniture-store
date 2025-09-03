// src/store/products/products.slice.ts
import {
  createAction,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { CatalogState } from './types';
import { IProduct } from 'app/models/Product/product';

export const initialState: CatalogState = {
  products: [],
  productDetails: {
    id: 0,
    name: '',
    price: 0,
    description: '',
    departmentId: 0,
    images: [],
    averageRating: 0,
    reviewCount: 0,
    sku: '',
    altText: '',
    reviews: [],
  },
  activeDepartment: null,
  visitedDepartments: [],
};

const slice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    setProductDetails: (state, action: PayloadAction<IProduct | null>) => {
      state.productDetails = action.payload;
    },
    setActiveDepartment: (state, action: PayloadAction<string | null>) => {
      state.activeDepartment = action.payload;
    },
    addVisitedDepartment: (state, action: PayloadAction<string>) => {
      if (!state.visitedDepartments.includes(action.payload)) {
        state.visitedDepartments.push(action.payload);
      }
    },
  },
});

const getProducts = createAction('GET_PRODUCTS');
const getProductsByDepartmentId = createAction<{ departmentId: number }>(
  'GET_PRODUCTS_BY_DEPARTMENT'
);
const getProductById = createAction<{ id: number }>('GET_PRODUCT_BY_ID');

export const { name: catalogSliceKey, reducer: catalogReducer } = slice;

export const catalogActions = {
  ...slice.actions,
  getProducts,
  getProductsByDepartmentId,
  getProductById,
};
