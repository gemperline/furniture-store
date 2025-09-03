import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IBreadcrumbNavigation {
  backButtonURL: string | null;
  breadcrumbHierarchy: any[] | null;
}

export const initialState: IBreadcrumbNavigation = {
  backButtonURL: null,
  breadcrumbHierarchy: null,
};

const breadcrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState,
  reducers: {
    setNavigationData(state, action: PayloadAction<IBreadcrumbNavigation>) {
      return {
        ...action.payload,
      };
    },
    reset() {
      return { ...initialState };
    },
  },
});

export const { reducer: breadcrumbReducer, actions: breadcrumbActions, name: breadcrumbSliceKey } = breadcrumbSlice;
