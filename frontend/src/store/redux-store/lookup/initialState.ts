export interface ILookupState {
    navigationItems: [] | any;
    isLoaded: boolean;
};

export const initialState: ILookupState = {
    navigationItems: [],
    isLoaded: false,
};
  