import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type NavigationTypes =
  | 'home'
  | 'livingRoom'
  | 'kitchen+dining'
  | 'bedroom'
  | 'outdoor'
  | 'decor';
export type INavigation = NavigationMenu<NavigationTypes, string>;
export interface NavigationMenu<T, P, C = {}> extends NavigationOption<T> {
  tag: string;
  /** icon to use */
  icon: number;
  /** Sub menu options */
  subMenu?: NavigationOption<P, C>[];
}

// new navigation structure
export interface NavigationOption<T, P = {}> {
  /** key for translation and selection */
  key: T;
  /** label name */
  name?: string;
  /** nav path */
  path?: string;
  /** state variables for navigation */
  pushState?: string;
  /** access roles */
                                    //   roles?: (keyof IRoles)[];
  /** disable menu option */
  disabled?: boolean;
  /** link only active when on the given route */
  enableOnlyForRoute?: string;
  /** Sub menu options */
                                     //   subMenu?: NavigationOption<P>[];
  /** Limit to one submenu opened at a time */
  singleSubMenuExpandable?: boolean;
  /** option is not disabled, but there is no action when clicking on the menu. Default is true */
  clickable?: boolean;
  /** custom action to perform instead of navigation */
  action?: {
    // type: NavigationAction;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
  };
  /** Adds Overflow tooltip for text */
  removeTextOverflow?: boolean;
  // title attribute for the element
  title?: string;
}

export interface INavigationMenu {
  navigationMenu: INavigation[];
  selectedMenu: INavigation | undefined;
  // selectedSubMenu?: NavigationOption<NavigationSubTypes> | NavigationOption<string>;
  navigationExpanded?: boolean;
}

const homeMenuOption: INavigation = {
  key: 'home',
  icon: 0,
  name: 'navMenu.home',
  tag: 'Home',
  path: '/',
};

const livingRoomMenuOption: INavigation = {
  key: 'livingRoom',
  icon: 3,
  name: 'navMenu.livingRoom',
  tag: 'Living Room',
  path: '/living-room',
};

const diningRoomMenuOption: INavigation = {
  key: 'kitchen+dining',
  icon: 3,
  name: 'navMenu.dining',
  tag: 'Kitchen + Dining',
  path: '/kitchen-dining',
};

const bedroomMenuOption: INavigation = {
  key: 'bedroom',
  icon: 3,
  name: 'navMenu.bedroom',
  tag: 'Bedroom',
  path: '/bedroom',
};

const outdoorMenuOption: INavigation = {
  key: 'outdoor',
  icon: 3,
  name: 'navMenu.outdoor',
  tag: 'Outdoor',
  path: '/outdoor',
};

const decorMenuOption: INavigation = {
  key: 'decor',
  icon: 3,
  name: 'navMenu.decor',
  tag: 'Decor',
  path: '/decor',
};

export const initialState: INavigationMenu = {
  navigationMenu: [
    homeMenuOption,
    livingRoomMenuOption,
    diningRoomMenuOption,
    bedroomMenuOption,
    outdoorMenuOption,
    decorMenuOption,
  ],
  selectedMenu: homeMenuOption,
  navigationExpanded: undefined,
};

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
      expandNavigation(state, action: PayloadAction<boolean>) {
        return { ...state, navigationExpanded: action.payload };
      },
      setSelectedMenu(state, action: PayloadAction<INavigation | undefined>) {
        return { ...state, selectedMenu: action.payload };
      },
    }
});

export const {
  actions: navigationActions,
  name: navigationSliceKey,
  reducer: navigationReducers,
} = navigationSlice;
