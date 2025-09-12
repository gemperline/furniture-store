import { call, put, takeLatest } from 'redux-saga/effects';
import { catalogActions } from './catalog.redux';
import {
  trackPromise,
  manuallyIncrementPromiseCounter,
  manuallyDecrementPromiseCounter,
} from 'react-promise-tracker';
import {
  getProductById,
  getProducts,
  getProductsByDepartmentId,
  getReviewsByProductId,
} from 'app/services/serviceRequests ';
import { PayloadAction } from '@reduxjs/toolkit';
import { httpSuccess } from 'utils/helpers';

export const catalogTrackerKeys = {
  GET_ALL_PRODUCTS: 'get-all-products',
  GET_PRODUCTS_BY_DEPARTMENT_ID: 'get-products-by-department-id',
  GET_PRODUCT_BY_ID: 'get-product-by-id',
};

const TrackGetProducts = (fn, ...args) =>
  trackPromise(fn(...args), catalogTrackerKeys.GET_ALL_PRODUCTS);
const TrackGetProductsByDepartmentId = (fn, ...args) =>
  trackPromise(fn(...args), catalogTrackerKeys.GET_PRODUCTS_BY_DEPARTMENT_ID);
const TrackGetProductById = (fn, ...args) =>
  trackPromise(fn(...args), catalogTrackerKeys.GET_PRODUCT_BY_ID);

function* fetchProducts() {
  try {
    const res = yield call(TrackGetProducts, getProducts);
    yield put(catalogActions.setProducts(res.data));
  } catch (error: any) {
    // Handle error here, e.g., show a notification or log it
  }
}

function* fetchProductById(action: PayloadAction<{ id: number }>) {
  try {
    yield manuallyIncrementPromiseCounter(catalogTrackerKeys.GET_PRODUCT_BY_ID);
    const productDetailsResponse = yield call(
      TrackGetProductById,
      getProductById,
      action.payload.id
    );
    const productReviewsResponse = yield call(
      TrackGetProductById,
      getReviewsByProductId,
      action.payload.id
    );
    if (httpSuccess(productDetailsResponse.status)) {
      const productDetails = {
        ...productDetailsResponse.data,
        ...productReviewsResponse.data,
      };
      yield put(catalogActions.setProductDetails(productDetails));
    } else {
      throw new Error('Product not found');
    }
  } catch (error: any) {
    // Handle error here, e.g., show a notification or log it
  } finally {
    yield manuallyDecrementPromiseCounter(catalogTrackerKeys.GET_PRODUCT_BY_ID);
  }
}

function* fetchProductsByDepartmentId(
  action: PayloadAction<{ departmentId: number }>
) {
  try {
    const res = yield call(
      TrackGetProductsByDepartmentId,
      getProductsByDepartmentId,
      action.payload.departmentId
    );
    yield put(catalogActions.setProducts(res.data));
  } catch (error: any) {
    // Handle error here, e.g., show a notification or log it
  }
}

export function* catalogSaga() {
  yield takeLatest(catalogActions.getProducts.type, fetchProducts);
  yield takeLatest(
    catalogActions.getProductsByDepartmentId.type,
    fetchProductsByDepartmentId
  );
  yield takeLatest(catalogActions.getProductById.type, fetchProductById);
}
