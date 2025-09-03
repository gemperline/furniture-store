import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './catalog.redux';
import { RootState } from 'types';

const selectDomain = (state: RootState) => state?.catalog || initialState;

export const catalogSelector = createSelector(
  [selectDomain],
  (catalog) => catalog
);

export const productsSelector = createSelector(
  [selectDomain],
  (catalog) => catalog.products
);

export const productSelector = createSelector(
  [selectDomain],
  (catalog) => catalog.productDetails
);

export const activeDepartmentSelector = createSelector(
  [selectDomain],
  (catalog) => catalog.activeDepartment
);

export const visitedDepartmentsSelector = createSelector(
  [selectDomain],
  (catalog) => catalog.visitedDepartments
);
